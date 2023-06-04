import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

// stores name, email, roles, class
interface AuthData {
  email: string;
  name: string;
  roles: string[];
  class: string;
}

interface AuthContextProps {
  auth: AuthData;
  saveAuth: (newAuth: AuthData) => void;
}

const AuthContext = createContext<AuthContextProps>({
  auth: {
    email: '',
    name: '',
    roles: [''],
    class: ''
  },
  saveAuth: () => {}
});

export const useAuth = (): AuthContextProps => useContext(AuthContext);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [auth, setAuth] = useState<AuthData>({
    email: '',
    name: '',
    roles: [''],
    class: ''
  });

  const saveAuth = (newAuth: AuthData) => {
    setAuth(newAuth);
  };

  useEffect(() => {}, [auth]);

  return (
    <AuthContext.Provider value={{ auth, saveAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
