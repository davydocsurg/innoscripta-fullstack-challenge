import React, { useEffect } from "react";
import {
    Navigate,
    Route,
    Routes as SwitchRoutes,
    useLocation,
} from "react-router-dom";
import AppPageLayout from "../components/AppPageLayout";
import { useAuth } from "../contexts";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { navUrl } from "../services";

const wrapAuthPage = (el: JSX.Element) => {
    return <AppPageLayout>{el}</AppPageLayout>;
};
const RequireAuth = ({ children }: { children: JSX.Element }) => {
    const { user } = useAuth();
    const location = useLocation();

    if (!user) {
        return (
            <Navigate to={navUrl.login} state={{ from: location }} replace />
        );
    }
    return wrapAuthPage(children);
};

const PublicRoute = ({ children }: { children: JSX.Element }) => {
    const { user } = useAuth();
    const location = useLocation();

    if (user) {
        return (
            <Navigate
                to={navUrl.dashboard}
                state={{ from: location }}
                replace
            />
        );
    }

    return children;
};

const Routes: React.FC = () => {
    return (
        <SwitchRoutes>
            <Route
                path={navUrl.login}
                element={
                    <PublicRoute>
                        <Login />
                    </PublicRoute>
                }
            />
            <Route
                path={navUrl.register}
                element={
                    <PublicRoute>
                        <Register />
                    </PublicRoute>
                }
            />

            <Route
                path={navUrl.dashboard}
                element={
                    <RequireAuth>
                        <Dashboard />
                    </RequireAuth>
                }
            />

            <Route
                path={navUrl.unknown}
                element={<Navigate to={navUrl.login} />}
            />
        </SwitchRoutes>
    );
};

export default Routes;
