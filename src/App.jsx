import Home from "./Components/Home";
import { Routes, Route } from "react-router-dom";
import TopRated from "./Components/TopRated";
import Upcoming from "./Components/Upcoming";
import Navbar from "./Components/Navbar";
import NotFound from "./Components/NotFound";
import Movie from "./Components/Movie";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />}>
          {" "}
          <Route path="/" element={<Home />} />
          <Route path="/top-rated" element={<TopRated />} />
          <Route path="/upcoming" element={<Upcoming />} />
          <Route path="/movie/:movieID" element={<Movie />} />
        </Route>
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
