import { Link } from "react-router-dom";
import Tasks from "../Tasks/Tasks";

export default function Body() {
  return (
    <div className="flex-1 flex flex-col flex-grow p-4 space-y-4">
      <div className="flex-1 bg-blue-200 rounded-2xl p-4 shadow-md flex items-center justify-between">
        <h2 className="text-4xl font-semibold">Icebreak</h2>
        
      </div>

      <div className="flex-1 bg-green-200 rounded-2xl p-4 shadow-md flex items-center justify-between">
        <h2 className="text-4xl font-semibold">Backlog</h2>
      </div>

      <div className="flex-1 bg-orange-200 rounded-2xl p-4 shadow-md flex items-center justify-between">
        <h2 className="text-4xl font-semibold">Current</h2>
      </div>
    </div>
  );
}
