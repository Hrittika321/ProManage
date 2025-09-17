import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router";
import "./index.css";

import Layout from "./layouts/Layout.jsx";
import Body from "./components/Body/Body.jsx";
import Landing from "./components/Landing/Landing.jsx";
import AddTaskForm from "./components/AddTaskForm/AddTaskForm.jsx";
import Login from "./components/Landing/Login.jsx";
import Register from "./components/Landing/Register.jsx";

import { TaskProvider } from "./context/TaskContext.jsx";
import { UserProvider } from "./context/UserContext.jsx";
import MainLayout from "./layouts/MainLayout.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route path="" element={<Landing />}>
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
        <Route path="/home/form" element={<AddTaskForm />} />
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
