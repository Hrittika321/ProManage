import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => {
    setIsAuthenticated(true);
    console.log(isAuthenticated);
  };
  const logout = () => {
    setIsAuthenticated(false);
    console.log(isAuthenticated);
  };
  return (
    <AuthContext.Provider value={{  login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
