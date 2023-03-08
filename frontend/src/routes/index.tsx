import React from "react";
import { Navigate, Route, Routes as SwitchRoutes } from "react-router-dom";
import AppPageLayout from "../components/AppPageLayout";
import { useAuth } from "../contexts";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { navUrl } from "../services";

const authGuard = (element: JSX.Element) => {
    const { user } = useAuth();
    return !!user ? (
        <AppPageLayout>{element}</AppPageLayout>
    ) : (
        <Navigate to={navUrl.login} />
    );
};

const Routes: React.FC = () => {
    return (
        <SwitchRoutes>
            <Route path={navUrl.login} element={<Login />} />
            <Route path={navUrl.register} element={<Register />} />

            <Route path={navUrl.dashboard} element={authGuard(<Dashboard />)} />

            <Route
                path={navUrl.unknown}
                element={<Navigate to={navUrl.login} />}
            />
        </SwitchRoutes>
    );
};

export default Routes;
