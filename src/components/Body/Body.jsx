export default function Body() {
  return (
    <div className="flex flex-col flex-grow p-4 space-y-4">
      <div className="flex-1 bg-blue-200 rounded-2xl p-4 shadow-md flex items-center justify-between">
        <h2 className="text-4xl font-semibold">Icebreak</h2>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700">
          + Add Task
        </button>
      </div>
      <div className="flex-1 bg-green-200 rounded-2xl p-4 shadow-md flex items-center justify-between">
        <h2 className="text-4xl font-semibold">Backlog</h2>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700">
          + Add Task
        </button>
      </div>

      <div className="flex-1 bg-orange-200 rounded-2xl p-4 shadow-md flex items-center justify-between">
        <h2 className="text-4xl font-semibold">Current</h2>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700">
          + Add Task
        </button>
      </div>
    </div>
  );
}
