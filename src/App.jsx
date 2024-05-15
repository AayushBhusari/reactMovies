import Home from "./Components/Home";
import { Routes, Route, useLocation } from "react-router-dom";
import TopRated from "./Components/TopRated";
import Upcoming from "./Components/Upcoming";
import NotFound from "./Components/NotFound";
import Movie from "./Components/Movie";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import "./App.css";

function App() {
  const location = useLocation();
  return (
    <>
      <SwitchTransition component={null}>
        <CSSTransition
          key={location.pathname}
          classNames="fade"
          timeout={300}
          unmountOnExit
        >
          <Routes location={location}>
            {" "}
            <Route path="/" element={<Home />} />
            <Route path="/top-rated" element={<TopRated />} />
            <Route path="/upcoming" element={<Upcoming />} />
            <Route path="/movie/:movieID" element={<Movie />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </CSSTransition>
      </SwitchTransition>
    </>
  );
}

export default App;
