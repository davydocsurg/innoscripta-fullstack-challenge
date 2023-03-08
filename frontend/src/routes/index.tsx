import React from "react";
import { Navigate, Route, Routes as SwitchRoutes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Register from "../pages/Register";

const Routes: React.FC = () => {
    return (
        <SwitchRoutes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route path="/dashboard" element={<Dashboard />} />

            <Route path="*" element={<Navigate to={"/"} />} />
        </SwitchRoutes>
    );
};

export default Routes;
