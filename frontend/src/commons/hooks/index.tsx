import React, { PropsWithChildren } from 'react';

import { AuthProvider } from './auth';
import { SettingsProvider } from './settings';

const AppProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => (
  <AuthProvider>
    <SettingsProvider>
      {children}
    </SettingsProvider>
  </AuthProvider>
);

export default AppProvider;
