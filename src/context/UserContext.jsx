import { createContext, useContext, useState, useEffect } from "react";

// users=[
//   {
//     id:
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

  const findUser = (email, password) => {
    const user = users.filter(
      (user) => user.email === email && user.password === password
    );
    return user;
  };

  // const updateUser = (newUser) => {//newUser is an object with the details of the user loggid in
  //   const users = JSON.parse(localStorage.getItem("users")) || [];
  //   const updatedUsers = users.map(user =>
  //   user.id === newUser.id ? { ...user, isAuthenticated: true } : user)
  //   localStorage.setItem("users", JSON.stringify(updatedUsers));
  // };

  return (
    <UserContext.Provider
      value={{ users, setUsers, addUser, findUser }}
    >
      {children}
    </UserContext.Provider>
  );
};

export function useUsers() {
  return useContext(UserContext);
}
