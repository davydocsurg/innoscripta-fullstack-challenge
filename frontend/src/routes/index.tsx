import React from "react";
import { Navigate, Route, Routes as SwitchRoutes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { navUrl } from "../services";

const Routes: React.FC = () => {
    return (
        <SwitchRoutes>
            <Route path={navUrl.login} element={<Login />} />
            <Route path={navUrl.register} element={<Register />} />

            <Route path={navUrl.dashboard} element={<Dashboard />} />

            <Route
                path={navUrl.unknown}
                element={<Navigate to={navUrl.login} />}
            />
        </SwitchRoutes>
    );
};

export default Routes;
