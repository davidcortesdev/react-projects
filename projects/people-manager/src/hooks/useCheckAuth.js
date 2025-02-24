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
      if (user) {
        // 1. Obtener datos FRESH de Firestore
        const userDoc = await getDoc(doc(FirebaseDB, "users", user.uid));
        
        // 2. Actualizar Redux con datos actualizados
        if (userDoc.exists()) {
          dispatch(login(userDoc.data())); // Sobrescribe el persist
        }
      } else {
        dispatch(logout());
      }
    });
    return unsubscribe;
  }, [dispatch]);

  return { status };
};