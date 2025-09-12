import { useState } from "react";
import { back, com, ice, cur } from "../../constants";
import { useTasks } from "../../context/TaskContext";

export default function TaskCard({ task }) {
  const { editTask, deleteTask } = useTasks();
  const [editingId, setEditingId] = useState(null);
  const [editedTitle, setEditedTitle] = useState("");
  const [editedDesc, setEditedDesc] = useState("");
  const [changeTypeId, setChangeTypeId] = useState(null);

  const handleEdit = (task) => {
    setEditingId(task.id);
    setEditedTitle(task.title);
    setEditedDesc(task.description);
  };

  const handleSave = (id) => {
    editTask(id, { title: editedTitle, description: editedDesc });
    setEditingId(null);
  };

  const handleTypeChange = (id, newType) => {
    editTask(id, { type: newType });
    setChangeTypeId();
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-200">
      {editingId === task.id ? (
        <div>
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
            className="w-full p-2 border rounded mb-3"
          />
          <textarea
            value={editedDesc}
            onChange={(e) => setEditedDesc(e.target.value)}
            className="w-full p-2 border rounded mb-3"
            rows="3"
          />
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={() => handleSave(task.id)}
          >
            Save
          </button>
          <button
            className="ml-2 text-gray-500 hover:underline"
            onClick={() => setEditingId(null)}
          >
            Cancel
          </button>
        </div>
      ) : (
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold">{task.title}</h3>

            {changeTypeId === task.id ? (
              <select
                value={task.type}
                onChange={(e) => handleTypeChange(task.id, e.target.value)}
                className="border p-1 rounded"
              >
                <option value={ice}>Icebreak</option>
                <option value={back}>Backlog</option>
                <option value={cur}>Current</option>
                <option value={com}>Completed</option>
              </select>
            ) : (
              <button
                className="bg-green-300 hover:bg-green-600 text-black text-sm px-3 py-1 rounded"
                onClick={() => setChangeTypeId(task.id)}
              >
                Change Type
              </button>
            )}
          </div>

          <p className="text-gray-600 mb-4">{task.description}</p>
          <span
            className={`inline-block px-3 py-1 text-sm rounded-full mb-4 ${
              task.type === ice
                ? "bg-blue-100 text-blue-600"
                : task.type === back
                ? "bg-yellow-100 text-yellow-600"
                : task.type === com
                ? "bg-green-100 text-green-600"
                : "bg-pink-100 text-pink-600"
            }`}
          >
            {task.type}
          </span>

          <div className="flex justify-between text-sm mt-4">
            <button
              className="text-blue-500 hover:underline"
              onClick={() => handleEdit(task)}
            >
              Edit
            </button>
            <button
              className="text-red-500 hover:underline"
              onClick={() => deleteTask(task.id)}
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
