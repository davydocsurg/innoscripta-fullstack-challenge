import {
    createContext,
    PropsWithChildren,
    useCallback,
    useContext,
    useState,
} from "react";
import { api, endPoints } from "../services";
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
    updateUserSettings: () => Promise<void>;
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
            const response = await api.get(endPoints.userSettings);
            const settings = response.data;

            if (settings) {
                await saveSettings(settings);
            }
        } catch (error: any) {
            console.error(error);
        }
    }, []);

    const updateUserSettings = useCallback(async () => {
        try {
            await api.patch(endPoints.userSettings);
        } catch (error: any) {
            console.error(error);
        }
    }, []);

    return (
        <UserSettingsContext.Provider
            value={{
                userSettings,
                saveSettings,
                getUserSettings,
                updateUserSettings,
            }}
        >
            {children}
        </UserSettingsContext.Provider>
    );
};

export function useSettings(): UserSettingsContextData {
    const context = useContext(UserSettingsContext);

    return context;
}
