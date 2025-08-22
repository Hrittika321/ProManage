export default function Sidebar() {
  return (
    <>
      <aside className="w-64 bg-blue-600 text-white h-full p-6">
        <h2 className="text-2xl font-bold mb-6">Find your way</h2>
        <nav className="flex flex-col space-y-4">
          <a href="#" className="hover:bg-blue-500 px-3 py-4 rounded">
            Home
          </a>
          <a href="#" className="hover:bg-blue-500 px-3 py-4 rounded">
            About
          </a>
          <a href="#" className="hover:bg-blue-500 px-3 py-4 rounded">
            Tasks
          </a>
          <a href="#" className="hover:bg-blue-500 px-3 py-4 rounded">
            Contact
          </a>
          <a href="#" className="hover:bg-blue-500 px-3 py-4 rounded">
            Help
          </a>
        </nav>
      </aside>
    </>
  );
}
