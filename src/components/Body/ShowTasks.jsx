import React from "react";

function ShowTasks({ type, taskArray, bgcolor }) {
  if (!Array.isArray(taskArray)) {
    console.error(`${type} received non-array:`, taskArray);
    return null;
  }
  return (
      <div className={`flex-1 ${bgcolor} rounded-2xl p-8 shadow-md h-full`}>
        <h2 className="text-4xl font-semibold mb-4">{type}</h2>
        <ul className="space-y-2">
          { taskArray .length === 0 ? (
            <p className="text-gray-600">No {type} tasks</p>
          ) : (
            taskArray .map((task) => (
              <li
                key={task.id}
                className="flex flex-col gap-5 justify-center align-baseline bg-white p-2 rounded shadow-sm text-gray-800"
              >
                <div className="">{task.title}</div>
                <div className="">{task.description}</div>
              </li>
            ))
          )}
        </ul>
      </div>
  );
}

export default ShowTasks;
