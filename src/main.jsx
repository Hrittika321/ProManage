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
import MainLayout from "./MainLayout.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route path="landing" element={<Landing />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
        }
      >
        <Route path="/home" element={<Body />} />
        <Route path="/home/about" element={<About />} />
        <Route path="/home/tasks" element={<Tasks />} />
        <Route path="/home/contact" element={<Contact />} />
        <Route path="/home/help" element={<Help />} />
        <Route path="/home/form" element={<AddTaskForm />} />
        <Route path="/home/profile" element={<Profile />} />
      </Route>
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TaskProvider>
      <UserProvider>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </UserProvider>
    </TaskProvider>
  </StrictMode>
);
