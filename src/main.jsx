import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, createRoutesFromElements, RouterProvider ,Route} from "react-router";
import "./index.css";

import Layout from "./Layout.jsx";
import Landing from "./components/Landing/Landing.jsx";
import AddTaskForm from "./components/AddTaskForm/AddTaskForm.jsx";

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Landing/>}>
      <Route path="home" element={<Layout/>}/>
      <Route path="task-form" element={<AddTaskForm/>}/>
    </Route>
  )
)

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
);
