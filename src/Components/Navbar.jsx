import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Transition } from "react-transition-group"; // Import Transition
import Search from "./Search"; // Import the Search component

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);

  const handleSearchToggle = () => {
    setShowSearch((prev) => !prev);
  };

  return (
    <>
      <nav className="bg-gray-800 text-white p-4">
        <div className="mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-semibold select-none">React Movies</h1>
          <ul className="flex space-x-10 items-center">
            <li>
              <Link to="/" className="hover:text-gray-400">
                Home
              </Link>
            </li>
            <li>
              <Link to="/top-rated" className="hover:text-gray-400">
                Top Rated
              </Link>
            </li>
            <li>
              <Link to="/upcoming" className="hover:text-gray-400">
                Upcoming
              </Link>
            </li>
            <li>
              <button
                onClick={handleSearchToggle}
                className="hover:text-gray-400 focus:outline-none mt-3"
              >
                <MagnifyingGlassIcon className="h-6 w-6" />
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Apply Transition to the Search component */}
      <Transition in={showSearch} timeout={300} mountOnEnter unmountOnExit>
        {(state) => (
          <div
            className={`transition-all duration-500 ease-in-out transform ${
              state === "entered"
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <Search onClose={handleSearchToggle} />
          </div>
        )}
      </Transition>

      <Outlet />
    </>
  );
};

export default Navbar;
