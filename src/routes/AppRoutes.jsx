import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/login/Login";
import Home from "../pages/home/Home";
import MainLayout from "../layouts/MainLayout";
import DynamicPage from "../pages/common/DynamicPage";
import { getToken } from "../services/authService";

const PrivateRoute = ({ children }) => {
  return getToken() ? children : <Navigate to="/login" replace />;
};

const AppRoutes = () => {
  return (
    <Routes>

      {/* Public */}
      <Route path="/login" element={<Login />} />

      {/* Private Area */}
      <Route
        path="/*"
        element={
          <PrivateRoute>
            <MainLayout />
          </PrivateRoute>
        }
      >
        <Route index element={<Home />} />

        {/* ALL dynamic pages */}
        <Route path="*" element={<DynamicPage />} />
      </Route>

    </Routes>
  );
};

export default AppRoutes;
