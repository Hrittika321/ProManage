import { useTasks } from "../../context/TaskContext";
import { back, com, cur, ice } from "../../constants";
import ShowTasks from "./ShowTasks";

export default function Body() {
  const { tasks } = useTasks();

  const icebreakTasks = tasks.filter((task) => task.type === ice);
  const backlogTasks = tasks.filter((task) => task.type === back);
  const currentTasks = tasks.filter((task) => task.type === cur);
  const completedTasks = tasks.filter((task) => task.type === com);

  return (
    <div className="flex gap-5 flex-grow p-8">
      <ShowTasks
        type={"Icebreak"}
        taskArray={icebreakTasks}
        bgcolor={"bg-blue-200"}
      />
      <ShowTasks
        type={"Backlog"}
        taskArray={backlogTasks}
        bgcolor={"bg-yellow-100"}
      />
      <ShowTasks
        type={"Current"}
        taskArray={currentTasks}
        bgcolor={"bg-pink-200"}
      />
      <ShowTasks
        type={"Completed"}
        taskArray={completedTasks}
        bgcolor={"bg-green-200"}
      />

      
    </div>
  );
}
