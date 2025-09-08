import { createContext, useContext, useState, useEffect } from "react";
import { back, ice } from "../constants";

export const TaskContext = createContext();

// {
//   id: 1756293410144,
//   title: "",
//   description: "",
//   type: "Completed"
// }

//Provider code
export function TaskProvider({ children }) {
  //anything under this provider section gets access of the TaskContext
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks((prev) => [...prev, task]);
  };

  const editTask = (id, updatedFields) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, ...updatedFields } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks((prev) =>
      prev.map((task) => {
        if (task.id === id) {
          if (task.type === ice) return { ...task, type: "Backlog" };
          else if (task.type === back) return { ...task, type: "Current" };
          else return { ...task, type: "Completed" };
        }
        return task;
      })
    );
  };
  return (
    <TaskContext.Provider
      value={{ tasks, setTasks, addTask, editTask, deleteTask, toggleComplete }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export function useTasks() {
  return useContext(TaskContext);
}
