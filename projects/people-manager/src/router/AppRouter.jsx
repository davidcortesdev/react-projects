import { Routes, Route, Navigate } from "react-router-dom";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { MenuRoutes } from "../aplication/routes/MenuRoutes";
import { useCheckAuth } from "../hooks/useCheckAuth";
import { CheckingAuth } from "../aplication/ui/CheckingAuth";
import { useEffect, useState } from "react";
import { persistor } from "../store/store";

export const AppRouter = () => {
  const { status } = useCheckAuth();
  const [persistLoaded, setPersistLoaded] = useState(false)


  useEffect(() => {
    persistor.subscribe(() => {
      const { booted } = persistor.getState();
      if (booted) setPersistLoaded(true);
    });
  }, []);


  if (persistLoaded ||status === 'checking') {
    return <CheckingAuth />;
  }
  
  return (
    <Routes>
      { status === 'authenticated' 
      ? 
      (
        <>
          <Route path="/*" element={<MenuRoutes />} />
          <Route path="/auth/*" element={<Navigate to="/" replace />} />
        </>
      ) 
      
      : 
      (
        <>
          <Route path="/auth/*" element={<AuthRoutes />} />
          <Route path="/*" element={<Navigate to="/auth/login" replace />} />
        </>
      )}
    </Routes>
  );
};
