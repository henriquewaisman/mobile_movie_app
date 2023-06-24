import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext({});

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export function AuthProvider({ children }) {
  const [logado, setLogado] = useState(false);
  const [loading, setLoading] = useState(false);

  function SignIn() {
    return new Promise((resolve) => {
      setLoading(true);
        setLogado(true);
        setLoading(false);
    });
  }

  return (
    <AuthContext.Provider value={{ logado, SignIn, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;