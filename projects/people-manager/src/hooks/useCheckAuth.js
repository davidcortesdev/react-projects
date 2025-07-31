import { doc, getDoc } from "firebase/firestore";
import { login, logout } from "../store/auth/authSlice";
import { FirebaseAuth, FirebaseDB } from "../firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

export const useCheckAuth = () => {
  const dispatch = useDispatch();
  const { status } = useSelector(state => state.auth);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(FirebaseAuth, async (user) => {
      console.log('onAuthStateChanged:', user);
      if (user) {
        try {
          const userDocRef = doc(FirebaseDB, "users", user.uid);
          const userDoc = await getDoc(userDocRef);
          console.log('userDoc:', userDoc.exists(), userDoc.data());
          
          if (userDoc.exists()) {
            dispatch(login({ uid: user.uid, ...userDoc.data() }));
          } else {
            setTimeout(async () => {
              const refreshedDoc = await getDoc(userDocRef);
              
              if (refreshedDoc.exists()) {
                dispatch(login({ uid: user.uid, ...refreshedDoc.data() }));
              } else {
                console.error('El documento del usuario no existe');
                dispatch(logout({ errorMessage: "El usuario no existe en la base de datos." }));
              }
            }, 500);
          }
        } catch (error) {
          console.error("Error al obtener el documento de usuario:", error);
          dispatch(logout({ errorMessage: error.message }));
        }
      } else {
        dispatch(logout());
      }
    });
    return () => unsubscribe();
  }, [dispatch]);

  return { status };
};