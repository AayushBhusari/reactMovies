import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <>
      <div className="h-screen flex justify-center items-center text-4xl font-bold ">
        <div className="text-center">
          <h2>Error 404</h2>
          <br />
          <h2>Page Not Found</h2>
          <br />
          <button className="p-4 bg-blue-600 rounded-xl hover:bg-blue-800">
            <Link to={"/"}>Go to home page</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default NotFound;
