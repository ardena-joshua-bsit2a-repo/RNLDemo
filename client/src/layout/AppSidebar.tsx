import { Link } from "react-router-dom";
import { useSidebar } from "../contexts/SidebarContext";

const AppSidebar = () => {
  const { isOpen, toggleSidebar } = useSidebar();

  const sidebarItems = [
    {
      path: "#",
      text: "Gender List",
    },
    {
      path: "#",
      text: "User List",
    },
  ];

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/30 sm:hidden"
          onClick={toggleSidebar}
        />
      )}

      <aside
        id="top-bar-sidebar"
        className={`fixed top-14 left-0 z-40 w-64 h-[calc(100vh-56px)] transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0 hover:bg-slate-700`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-slate-900 text-white border-e border-slate-800">
          <ul className="space-y-2 font-medium">
            {sidebarItems.map((sidebarItem) => (
              <li key={sidebarItem.text}>
                <Link
                  to={sidebarItem.path}
                  className="flex items-center px-3 py-2 rounded-md transition-all duration-200 ease-in-out hover:bg-slate-700 hover:text-white"
                >
                  <span className="ms-3">{sidebarItem.text}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
};

export default AppSidebar;
