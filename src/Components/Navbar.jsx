const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className=" mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-semibold">React Movies</h1>
        <ul className="flex space-x-10">
          <li>
            <a href="/" className="hover:text-gray-400">
              Home
            </a>
          </li>
          <li>
            <a href="/top-rated" className="hover:text-gray-400">
              Top Rated
            </a>
          </li>
          <li>
            <a href="/upcoming" className="hover:text-gray-400">
              Upcoming
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
