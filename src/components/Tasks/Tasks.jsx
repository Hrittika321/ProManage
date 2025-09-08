import { useState } from "react";
import { back, com, ice } from "../../constants";
import { useTasks } from "../../context/TaskContext";

export default function Tasks() {
  const { tasks, editTask, deleteTask, toggleComplete } = useTasks();

  const [editingId, setEditingId] = useState(null);
  const [editedTitle, setEditedTitle] = useState("");
  const [editedDesc, setEditedDesc] = useState("");

  const handleChange = (id) => {
    toggleComplete(id);
  };

  const handleEdit = (task) => {
    setEditingId(task.id);
    setEditedTitle(task.title);
    setEditedDesc(task.description);
  };

  const handleSave = (id) => {
    editTask(id, { title: editedTitle, description: editedDesc });
    setEditingId(null);
  };

  return (
    <div className="h-full bg-gray-100 p-8">
      <h2 className="text-3xl font-bold text-center mb-8 text-blue-600">
        All Tasks
      </h2>

      {tasks.length === 0 ? (
        <p className="text-center text-gray-500">No tasks added yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tasks.map((task, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 border border-gray-200"
            >
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
                    {task.type !== "Completed" && (
                      <button
                        className="bg-green-300 hover:bg-green-600 text-black text-sm px-3 py-1 rounded"
                        onClick={() => handleChange(task.id)}
                      >
                        Done
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
          ))}
        </div>
      )}
    </div>
  );
}
