import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="bg-gray-800 text-white p-4">
        <div className=" mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-semibold">React Movies</h1>
          <ul className="flex space-x-10">
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
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
