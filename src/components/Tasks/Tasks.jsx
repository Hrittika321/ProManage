import {useTasks} from "../../context/TaskContext"

export default function Tasks() {
  const { tasks } = useTasks();

  return (
    <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {tasks.length === 0 ? (
        <p className="text-gray-600">No tasks added yet.</p>
      ) : (
        tasks.map((task, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg p-6 border border-gray-200"
          >
            <h3 className="text-xl font-bold">{task.title}</h3>
            <p className="text-gray-600">{task.description}</p>
            <span className="inline-block mt-3 px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-600">
              {task.type}
            </span>
          </div>
        ))
      )}
    </div>
  );
}

