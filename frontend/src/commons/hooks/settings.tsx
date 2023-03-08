import React, { PropsWithChildren, createContext, useCallback, useContext, useState } from 'react';

import api from 'services/api';

import { useAuth } from './auth';

interface ISettingsState {
  fav_categories: string[];
  fav_authors: string[];
  fav_sources: string[];
}

interface ISettingsContextData {
  settings: ISettingsState;
  saveSettings(settings: ISettingsState): Promise<void>;
  getSettingsBackend(): Promise<void>;
  saveSettingsBackend(): Promise<void>;
}

const SettingsContext = createContext<ISettingsContextData>({} as ISettingsContextData);

export const SettingsProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {

  const { user } = useAuth();
  const [data, setData] = useState<ISettingsState>(() => {
    const settings = localStorage.getItem('@INNOSCRIPTA:settings');

    if (settings) {
      return JSON.parse(settings);
    }

    return {} as ISettingsState;
  });

  const saveSettings = useCallback(async (data: ISettingsState) => {
    localStorage.setItem('@INNOSCRIPTA:settings', JSON.stringify(data));

    setData(data);
  }, []);

  const getSettingsBackend = async () => {
    try {
      let response = await api.get(`/user-config`);

      if (response?.data?.settings) {
        await saveSettings(response.data.settings);
      }
    } catch (error) {
      console.log('getSettingsBackend', error)
    }
  };

  const saveSettingsBackend = async () => {
    try {
      await api.patch(`/user-config`, data);
    } catch (error) {
      console.log('saveSettingsBackend', error)
    }
  };

  return (
    <SettingsContext.Provider
      value={{ 
        settings: data, 
        saveSettings,
        getSettingsBackend,
        saveSettingsBackend
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export function useSettings(): ISettingsContextData {
  const context = useContext(SettingsContext);

  if (!context) throw new Error('useSettings must be used within an SettingsProvider');

  return context;
}
