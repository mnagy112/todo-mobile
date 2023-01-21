import React, { createContext, useContext, useState } from 'react';

interface Props {
  children: React.ReactNode;
}

interface ContextValue {
  userName?: string;
  login: (name: string) => void;
  logout: () => void;
}

const AuthContext = createContext<ContextValue>({
  login: () => undefined,
  logout: () => undefined,
});

export const AuthProvider = ({ children }: Props) => {
  const [userName, setUserName] = useState<string | undefined>();

  const login = (name: string): void => {
    setUserName(name);
  };

  const logout = (): void => {
    setUserName(undefined);
  };

  return (
    <AuthContext.Provider
      value={{
        userName,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): ContextValue => {
  return useContext(AuthContext);
};

export const useLoggedUser = (): string => {
  const { userName } = useContext(AuthContext);

  if (!userName) {
    throw Error('User not logged in!');
  }

  return userName;
};
