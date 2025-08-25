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
import AddTaskForm from "./components/AddTaskForm/AddTaskForm.jsx";
import Body from "./components/Body/Body.jsx";
import About from "./components/About/About.jsx";
import Landing from "./components/Landing/Landing.jsx";
import Tasks from "./components/Tasks/Tasks.jsx"
import Contact from "./components/Contact/Contact.jsx"
import Help from "./components/Help/Help.jsx"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/landing" element={<Landing />} />
      <Route path="" element={<Body />}>
        <Route path="task-form" element={<AddTaskForm />} />
      </Route>
      <Route path="about" element={<About />} />
      <Route path="tasks" element={<Tasks />} />
      <Route path="contact" element={<Contact />} />
      <Route path="help" element={<Help />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
