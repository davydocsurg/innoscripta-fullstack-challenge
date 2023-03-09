import { createContext, PropsWithChildren, useCallback, useState } from "react";
import { api } from "../services";
import { userSettings } from "../constants";

type UserSettingsState = {
    favorite_authors: string[];
    favorite_categories: string[];
    favorite_sources: string[];
};

type UserSettingsContextData = {
    userSettings: UserSettingsState;
    saveSettings: (settings: UserSettingsState) => Promise<void>;
    getUserSettings: () => Promise<void>;
};

const UserSettingsContext = createContext<UserSettingsContextData>(
    {} as UserSettingsContextData
);

export const UserSettingsProvider: React.FC<PropsWithChildren<{}>> = ({
    children,
}) => {
    const [userSettings, setUserSettings] = useState<UserSettingsState>(() => {
        const settings = localStorage.getItem(
            userSettings as unknown as string
        );

        if (settings) {
            return JSON.parse(settings);
        }

        return {} as UserSettingsState;
    });

    const saveSettings = useCallback(async (settings: UserSettingsState) => {
        localStorage.setItem(
            userSettings as unknown as string,
            JSON.stringify(settings)
        );
        setUserSettings(settings);
    }, []);

    const getUserSettings = useCallback(async () => {
        try {
            const response = await api.get("/settings");
            const settings = response.data;
            localStorage.setItem(
                userSettings as unknown as string,
                JSON.stringify(settings)
            );
            setUserSettings(settings);
        } catch (error: any) {
            console.error(error);
        }
    }, []);
};
