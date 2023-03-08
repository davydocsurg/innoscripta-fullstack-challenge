import React, { PropsWithChildren } from "react";
import { useAuth, AuthProvider } from "./auth";

const AppProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => (
    <AuthProvider>{children}</AuthProvider>
);

export { useAuth, AppProvider };
