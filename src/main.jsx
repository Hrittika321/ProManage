import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router";
import "./index.css";

import Layout from "./Layout.jsx";
import Body from "./components/Body/Body.jsx";
import About from "./components/About/About.jsx";
import Landing from "./components/Landing/Landing.jsx";
import Tasks from "./components/Tasks/Tasks.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Help from "./components/Help/Help.jsx";
import AddTaskForm from "./components/AddTaskForm/AddTaskForm.jsx";
import Profile from "./components/Profile/Profile.jsx";
import Login from "./components/Landing/Login.jsx";
import Register from "./components/Landing/Register.jsx";

import { TaskProvider } from "./context/TaskContext.jsx";
import { UserProvider } from "./context/UserContext.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    
    <Route path="/" element={<Layout />}>
      <Route path="landing" element={<Landing />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
      <Route path="" element={<Body />} />
      <Route path="about" element={<About />} />
      <Route path="tasks" element={<Tasks />} />
      <Route path="contact" element={<Contact />} />
      <Route path="help" element={<Help />} />
      <Route path="form" element={<AddTaskForm />} />
      <Route path="profile" element={<Profile />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TaskProvider>
      <UserProvider>
          <RouterProvider router={router} />
      </UserProvider>
    </TaskProvider>
  </StrictMode>
);
