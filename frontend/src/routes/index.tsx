import React, { useEffect } from "react";
import { Navigate, Route, Routes as SwitchRoutes } from "react-router-dom";
import AppPageLayout from "../components/AppPageLayout";
import { useAuth } from "../contexts";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { navUrl } from "../services";

const authGuard = () => {
    const { user } = useAuth();

    if (!user) {
        return <Navigate to={navUrl.login} />;
    }
    return <Navigate to={navUrl.dashboard} />;
};

useEffect(() => {
    authGuard();
}, []);

const wrapAuthPage = (el: JSX.Element) => {
    return <AppPageLayout>{el}</AppPageLayout>;
};

const Routes: React.FC = () => {
    return (
        <SwitchRoutes>
            <Route path={navUrl.login} element={<Login />} />
            <Route path={navUrl.register} element={<Register />} />

            <Route
                path={navUrl.dashboard}
                element={wrapAuthPage(<Dashboard />)}
            />

            <Route
                path={navUrl.unknown}
                element={<Navigate to={navUrl.login} />}
            />
        </SwitchRoutes>
    );
};

export default Routes;
