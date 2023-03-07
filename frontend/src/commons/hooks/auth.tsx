import React, { PropsWithChildren, createContext, useCallback, useContext, useState } from 'react';

import api from '../services/api';

interface IUser {
  id: string;
  name: string;
  email: string;
}

interface IAuthState {
  token: string;
  user: IUser;
}

interface ISignInCredentials {
  email: string;
  password: string;
}

interface IAuthContextData {
  user: IUser;
  signIn(credentials: ISignInCredentials): Promise<void>;
  signOut(): void;
  updateUser(user: IUser): void;
}

interface IRequestSignIn {
  email: string;
  password: string;
}

const AuthContext = createContext<IAuthContextData>({} as IAuthContextData);

export const AuthProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const [data, setData] = useState<IAuthState>(() => {
    const token = localStorage.getItem('@PFCLI:token');
    const user = localStorage.getItem('@PFCLI:user');

    if (token && user) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      return { token, user: JSON.parse(user) };
    }

    return {} as IAuthState;
  });

  const signIn = useCallback(async ({ email, password }: IRequestSignIn) => {
    const response = await api.post('/login', { email, password });
    const { token, user } = response.data;
   
    localStorage.setItem('@INNOSCRIPTA:token', token);
    localStorage.setItem('@INNOSCRIPTA:user', JSON.stringify(user));

    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    setData({ token, user });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@INNOSCRIPTA:token');
    localStorage.removeItem('@INNOSCRIPTA:user');
    localStorage.removeItem('@INNOSCRIPTA:settings');

    setData({} as IAuthState);
  }, []);

  const updateUser = useCallback(
    (user: IUser) => {
      localStorage.setItem('@INNOSCRIPTA:user', JSON.stringify(user));

      setData({
        token: data.token,
        user,
      });
    },
    [setData, data.token],
  );

  return (
    <AuthContext.Provider
      value={{ user: data.user, signIn, signOut, updateUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): IAuthContextData {
  const context = useContext(AuthContext);

  if (!context) throw new Error('useAuth must be used within an AuthProvider');

  return context;
}
