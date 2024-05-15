import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const MovieCard = ({
  poster_path,
  title,
  overview,
  release_date,
  genres,
  vote_average,
  vote_count,
  movieID,
}) => {
  return (
    <Link to={`/movie/${movieID}`}>
      <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg p-3">
        {/* Movie Poster */}
        <div className="flex justify-center items-center mb-4">
          <img
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            alt="Movie Poster"
            className=""
          />
        </div>

        <div className="p-4">
          {/* Movie Title */}
          <h2 className="text-xl font-bold text-white mb-2">{title}</h2>
          {/* Movie Overview */}
          <p className="text-gray-400 mb-4">{overview}</p>
          {/* Release Date */}
          <p className="text-gray-400 mb-2">
            <span className="font-bold">Release Date:</span> {release_date}
          </p>
          {/* ID */}
          <p className="text-gray-400 mb-2">
            <span className="font-bold">ID:</span> {movieID}
          </p>

          {/* Genres */}
          {genres && (
            <div className="mb-2">
              <span className="font-bold text-gray-400">Genres:</span>
              <ul className="inline-flex">
                {genres.map((genre) => (
                  <li key={genre.id} className="text-gray-400 ml-2">
                    {genre.name}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {/* Average Vote */}
          <p className="text-gray-400 mb-2">
            <span className="font-bold">Average Vote:</span> {vote_average}
          </p>
          {/* Vote Count */}
          <p className="text-gray-400 mb-2">
            <span className="font-bold">Vote Count:</span> {vote_count}
          </p>
        </div>
      </div>
    </Link>
  );
};

// PropTypes
MovieCard.propTypes = {
  poster_path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  release_date: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
  vote_average: PropTypes.number.isRequired,
  vote_count: PropTypes.number.isRequired,
  movieID: PropTypes.number.isRequired,
};

export default MovieCard;
