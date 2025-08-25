export default function Footer() {
  return (
    <footer className=" fixed bottom-0 w-full bg-gray-100 text-center py-4 border-t ">
      <p className="text-gray-600 text-sm">
        © {new Date().getFullYear()} ProManage. All rights reserved.
      </p>
    </footer>
  );
}
