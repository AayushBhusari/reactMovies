import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";

const Movie = () => {
  const { movieID } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieID}?api_key=3ea3884935c602b89781523e7db96dc7`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch movie details");
        }
        const data = await response.json();
        setMovieDetails(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovieDetails();
  }, [movieID]);

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg p-3 flex flex-col">
        {/* Movie Poster */}
        <img
          src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
          alt="Movie Poster"
          className="h-96 w-60 self-center"
        />

        <div className="p-4">
          {/* Movie Title */}
          <h2 className="text-xl font-bold text-white mb-2">
            {movieDetails.title}
          </h2>
          {/* Movie Overview */}
          <p className="text-gray-400 mb-4">{movieDetails.overview}</p>
          {/* Release Date */}
          <p className="text-gray-400 mb-2">
            <span className="font-bold">Release Date:</span>{" "}
            {movieDetails.release_date}
          </p>
          {/* Tagline */}
          <p className="text-gray-400 mb-2">
            <span className="font-bold">Tagline:</span> {movieDetails.tagline}
          </p>
          {/* ID */}
          <p className="text-gray-400 mb-2">
            <span className="font-bold">ID:</span> {movieDetails.id}
          </p>

          {/* Genres */}
          {movieDetails.genres && (
            <div className="mb-2">
              <span className="font-bold text-gray-400">Genres:</span>
              <ul className="inline-flex">
                {movieDetails.genres.map((genre) => (
                  <li key={genre.id} className="text-gray-400 ml-2">
                    {genre.name}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {/* Average Vote */}
          <p className="text-gray-400 mb-2">
            <span className="font-bold">Average Vote:</span>{" "}
            {movieDetails.vote_average}
          </p>
          {/* Vote Count */}
          <p className="text-gray-400 mb-2">
            <span className="font-bold">Vote Count:</span>{" "}
            {movieDetails.vote_count}
          </p>
        </div>
      </div>
    </div>
  );
};

// PropTypes
Movie.propTypes = {
  movieId: PropTypes.number,
};

export default Movie;
