import { Routes, Route, Navigate } from "react-router-dom";
import { Menu } from "../pages/Menu";

export const MenuRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Menu />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};