import { useState } from "react";
import { back, com, ice, cur } from "../../constants";
import { useTasks } from "../../context/TaskContext";

export default function TaskCard({ task }) {
  const { editTask, deleteTask } = useTasks();
  const [editingId, setEditingId] = useState(null);
  const [editedTitle, setEditedTitle] = useState("");
  const [editedDesc, setEditedDesc] = useState("");
  const [changeTypeId, setChangeTypeId] = useState(null);
  const [expanded, setExpanded] = useState(false);

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
    <>
      <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-200 w-[370px]">
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
              <h3 className="text-xl font-semibold line-clamp-1">
                {task.title}
              </h3>

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
                  className="fixed bg-green-300 hover:bg-green-600 text-black text-sm px-3 py-1 rounded ml-55"
                  onClick={() => setChangeTypeId(task.id)}
                >
                  Change Type
                </button>
              )}
            </div>

            <div className="text-gray-600 mb-2">
              <span className="line-clamp-2">{task.description}</span>
              {(task.description?.length > 50 || task.title?.length > 20) && (
                <button
                  className="text-blue-500 text-sm hover:underline ml-1"
                  onClick={() => setExpanded(true)}
                >
                  Show more
                </button>
              )}
            </div>

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

      {expanded && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-lg p-6 w-[600px] h-[400px] relative flex flex-col">
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-black"
              onClick={() => setExpanded(false)}
            >
              ✕
            </button>
            <div className="overflow-y-auto pr-2">
              <h2 className="text-2xl font-bold mb-4 break-words">
                {task.title}
              </h2>
              <p className="text-gray-700 mb-6 whitespace-pre-wrap break-words">
                {task.description}
              </p>

              <span
                className={`inline-block px-3 py-1 text-sm rounded-full mb-6 ${
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
            </div>

            <div className="flex justify-between text-sm mt-auto pt-4 border-t">
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
        </div>
      )}
    </>
  );
}
