import React, { PropsWithChildren } from "react";
import { useAuth, AuthProvider } from "./auth";
import { UserSettingsProvider } from "./settings";
import { ArticleProvider, useArticleContext } from "./articles";

const AppProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => (
    <AuthProvider>
        <UserSettingsProvider>
            <ArticleProvider>{children}</ArticleProvider>
        </UserSettingsProvider>
    </AuthProvider>
);

export { useAuth, useArticleContext, AppProvider };
