import { Navigate, Route, Routes } from "react-router-dom";

//Pages
import Home from "../pages/Home";
import Lookup from "../pages/Lookup";

/**
 * AppRoutes component where all the routing for the project is setup.
 */
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/lookup" element={<Lookup />} />
      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  );
};

export default AppRoutes;
