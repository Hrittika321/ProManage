import { createContext, useContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState(() => {
    const storedUsers = localStorage.getItem("users");
    return storedUsers ? JSON.parse(storedUsers) : [];
  });

  useEffect(() => {
    const storedUsers = localStorage.getItem("users");
    if (storedUsers) {
      setUsers(JSON.parse(storedUsers));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);


  const addUser = (user) => {};
  const findUser = (id) => {};

  return (
    <UserContext.Provider value={{ users, setUsers, addUser, findUser }}>
      {children}
    </UserContext.Provider>
  );
};

export function useUsers() {
  return useContext(UserContext);
}
