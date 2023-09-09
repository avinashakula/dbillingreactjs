import { Routes, Route } from "react-router-dom";
import AddModerators from "@components/moderators/addModerators";
import Moderators from "@components/moderators/moderators";

export function StockRoutes() {
  return (
    <Routes>
      <Route path="/moderators/add" element={<AddModerators />} />
      <Route path="/moderators" element={<Moderators />} />
    </Routes>
  );
}
