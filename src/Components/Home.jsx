import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

const Home = () => {
  const [movies, setMovies] = useState([]);

  const getData = async () => {
    try {
      const result = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=3ea3884935c602b89781523e7db96dc7"
      );
      if (!result.ok) {
        throw new Error("Failed to fetch data");
      }
      const resu = await result.json();
      const res = resu.results;
      console.log(res);
      setMovies(res);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl mb-5 text-center">Latest</h1>
      <div className="grid grid-cols-4 gap-2">
        {movies.map((movie, i) => (
          <MovieCard
            key={i}
            poster_path={movie.poster_path}
            title={movie.title}
            overview={movie.overview}
            release_date={movie.release_date}
            tagline={movie.tagline}
            movieID={movie.id}
            genres={movie.genres}
            vote_average={movie.vote_average}
            vote_count={movie.vote_count}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
