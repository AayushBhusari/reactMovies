import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
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
      {showSearch && <Search onClose={handleSearchToggle} />}
      <Outlet />
    </>
  );
};

export default Navbar;
