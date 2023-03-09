import React, { PropsWithChildren } from "react";
import { useAuth, AuthProvider } from "./auth";
import { UserSettingsProvider } from "./settings";

const AppProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => (
    <AuthProvider>
        <UserSettingsProvider>{children}</UserSettingsProvider>
    </AuthProvider>
);

export { useAuth, AppProvider };
