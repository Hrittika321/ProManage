import React from "react";
import TaskCard from "../Tasks/TaskCard";

function ShowTasks({ type, taskArray, bgcolor }) {
  return (
    <div className={`flex-1 ${bgcolor} rounded-2xl p-8 shadow-md h-full`}>
      <h2 className="text-4xl font-semibold mb-4">{type}</h2>
      <ul className="space-y-2">
        {taskArray.length === 0 ? (
          <p className="text-gray-600">No {type} tasks</p>
        ) : (
          taskArray.map((task) => <TaskCard key={task.id} task={task} />)
        )}
      </ul>
    </div>
  );
}

export default ShowTasks;
