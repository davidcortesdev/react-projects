import { FirebaseDB } from '../../firebase/config';
import { addDoc, collection, doc, getDocs, query, serverTimestamp, updateDoc, where, onSnapshot } from 'firebase/firestore';

// Función para asignar una misión si no existe una asignada para hoy
export const asignarMisionSiNoExiste = async (uid, misionesDisponibles) => {
    // Obtenemos la fecha de inicio del día
    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0);

    const missionsRef = collection(FirebaseDB, "misiones");

    // Consulta: misiones asignadas al usuario cuya fecha de asignación es a partir de hoy
    const q = query(
        missionsRef,
        where("asignadoA", "==", uid),
        where("fechaAsignacion", ">=", hoy)
    );
    const querySnapshot = await getDocs(q);
    if (querySnapshot.empty) {
        // No hay misión asignada hoy, asignamos una misión aleatoria
        const misionAleatoria =
            misionesDisponibles[Math.floor(Math.random() * misionesDisponibles.length)];
        return await addDoc(missionsRef, {
            ...misionAleatoria,
            asignadoA: uid,
            fechaAsignacion: serverTimestamp(),
            estado: false // false indica que no está finalizada
        });
    }
    return null;
};

// Función para suscribirse a las misiones asignadas a un usuario
export const subscribeMisiones = (uid, callback) => {
    const missionsRef = collection(FirebaseDB, "misiones");
    const q = query(missionsRef, where("asignadoA", "==", uid));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const missionsData = [];
        querySnapshot.forEach((doc) => {
            missionsData.push({ id: doc.id, ...doc.data() });
        });
        callback(missionsData);
    });
    return unsubscribe;
};

// Función para alternar el estado de finalización de una misión
export const toggleMisionFinishedThunk = async (id, currentState) => {
    const missionDocRef = doc(FirebaseDB, "misiones", id);
    return await updateDoc(missionDocRef, {
        estado: !currentState
    });
};
