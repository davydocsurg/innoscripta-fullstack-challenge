import { createContext } from "react";
import { api } from "../services";

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
