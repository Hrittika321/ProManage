import { createContext, useContext, useState } from "react";

export const TaskContext = createContext();


//Provider code
export function TaskProvider({ children }) { //anything under this provider section gets access of the TaskContext
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks((prev) => [...prev, task]);
  }; 

  return (
    <TaskContext.Provider value={{tasks,setTasks,addTask}}>
        {children}
    </TaskContext.Provider>
  )
}

export function useTasks() {
  return useContext(TaskContext);
}