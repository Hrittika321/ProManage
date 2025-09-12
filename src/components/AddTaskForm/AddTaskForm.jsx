import { useState } from "react";
import { useTasks } from "../../context/TaskContext";
import { useNavigate } from "react-router";
import { back, cur, ice } from "../../constants";

export default function AddTaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const navigate = useNavigate();

  const { setShowForm, addTask } = useTasks();

  function submitHandler(e) {
    e.preventDefault();
    setShowForm(false);
    addTask({ id: Date.now(), title, description, type });
    setTitle("");
    setDescription("");
    setType("");
    navigate("/home");
  }

  return (
    <div className="bg-white p-8 rounded-2xl shadow-md  w-120">
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">
        Add New Task
      </h2>

      <form className="space-y-4" onSubmit={submitHandler}>
        <label
          htmlFor="task-title"
          className="block text-lg font-semibold mb-2"
        >
          Task Title:{" "}
        </label>
        <input
          type="text"
          id="task-title"
          placeholder="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <label
          htmlFor="task-descriptiom"
          className="block text-lg font-semibold mb-2"
        >
          Task Description:{" "}
        </label>
        <textarea
          id="task-description"
          placeholder="Task Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <ul>
          <label className="block text-lg font-semibold mb-2">Task Type:</label>
          <input
            type="radio"
            name="task-type"
            id="icebreak"
            value="Icebreak"
            checked={type === ice}
            onChange={(e) => setType(e.target.value)}
          />
          <label htmlFor="icebreak"> Icebreak</label>
          <br />
          <input
            type="radio"
            name="task-type"
            id="backlog"
            value="Backlog"
            checked={type === back}
            onChange={(e) => setType(e.target.value)}
          />
          <label htmlFor="backlog"> Backlog</label>
          <br />
          <input
            type="radio"
            name="task-type"
            id="current"
            value={cur}
            checked={type === cur}
            onChange={(e) => setType(e.target.value)}
          />
          <label htmlFor="current"> Current</label>
          <br />
        </ul>
        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
