import { createContext, useContext, useState } from "react";

// users=[
//   {
//     username:
//     email:
//     password:
//   }
// ]

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

  const addUser = (user) => {
    setUsers((prev) => [...prev, user]);
  };
  
  const findUser = (email) => {
    const user = users.filter((user) => user.email === email);
    return user;
  };

  return (
    <UserContext.Provider value={{ users, setUsers, addUser, findUser }}>
      {children}
    </UserContext.Provider>
  );
};

export function useUsers() {
  return useContext(UserContext);
}
