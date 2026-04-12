import { Link } from "react-router-dom";
import { useHeader } from "../contexts/HeaderContext";
import { useSidebar } from "../contexts/SidebarContext";

const AppHeader = () => {
  const { isOpen, toggleUserMenu } = useHeader();
  const { toggleSidebar } = useSidebar();

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-30" onClick={toggleUserMenu}></div>
      )}

      <nav className="fixed top-0 z-50 w-full bg-slate-900 text-white border-b border-slate-800">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start rtl:justify-end">
              <button
                type="button"
                onClick={toggleSidebar}
                className="sm:hidden text-heading bg-transparent box-border border border-transparent hover:bg-neutral-secondary-medium focus:ring-4 focus:ring-neutral-tertiary font-medium leading-5 rounded-base text-sm p-2 focus:outline-none"
              >
                <span className="sr-only">Open sidebar</span>
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="2"
                    d="M5 7h14M5 12h14M5 17h10"
                  />
                </svg>
              </button>
              <a href="https://flowbite.com" className="flex ms-2 md:me-24">
                <img
                  src="https://flowbite.com/docs/images/logo.svg"
                  className="h-6 me-3"
                  alt="FlowBite Logo"
                />
                <span className="self-center text-lg font-semibold whitespace-nowrap dark:text-white">
                  Flowbite
                </span>
              </a>
            </div>
            <div className="flex items-center">
              <div className="relative flex items-center ms-3">
                <div>
                  <button
                    type="button"
                    onClick={toggleUserMenu}
                    className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                    data-dropdown-toggle="dropdown-user"
                  >
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="w-8 h-8 rounded-full"
                      src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                      alt="user photo"
                    />
                  </button>
                </div>
                <div
                  className={`absolute right-0 top-10 z-50 ${
                    isOpen ? "block" : "hidden"
                  } bg-gray-800 text-white border border-gray-700 rounded shadow-lg w-44`}
                >
                  <div
                    className="px-4 py-3 border-b border-default-medium"
                    role="none"
                  >
                    <p className="text-sm font-medium text-heading" role="none">
                      Neil Sims
                    </p>
                    <p className="text-sm text-body truncate" role="none">
                      neil.sims@flowbite.com
                    </p>
                  </div>
                  <ul className="p-2 text-sm text-body font-medium" role="none">
                    <li>
                      <Link
                        to="#"
                        className="inline-flex items-center w-full p-2 rounded transition-all duration-200 ease-in-out hover:bg-slate-700 hover:text-white"
                      >
                        Sign out
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default AppHeader;
