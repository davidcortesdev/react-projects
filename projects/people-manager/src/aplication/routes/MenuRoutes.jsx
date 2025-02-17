import { Routes, Route, Navigate } from "react-router-dom";
import { SelectHero } from "../pages/SelectHero";
import { Menu } from "../ui/Menu";
import { ChatPage } from "../pages/ChatPage";
import { Misiones } from "../pages/Misiones";


export const MenuRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Menu />} />
      <Route path="/selecthero" element={<SelectHero />} />
      <Route path="/chatpage" element={<ChatPage />} />
      <Route path="/misiones" element={<Misiones />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};