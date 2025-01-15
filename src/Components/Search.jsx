import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { XMarkIcon } from "@heroicons/react/24/solid";

const Search = ({ onClose }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate(); // Hook for navigation

  const handleSearchChange = async (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.trim() === "") {
      setSuggestions([]);
      return;
    }

    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=3ea3884935c602b89781523e7db96dc7&query=${value}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch suggestions");
      }
      const data = await response.json();
      setSuggestions(data.results.slice(0, 5));
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    }
  };

  const handleSuggestionClick = (movieId) => {
    navigate(`/movie/${movieId}`); // Navigate to movie page
    onClose(); // Close the search bar
    setSearchTerm(""); // Clear search term
    setSuggestions([]); // Clear suggestions
  };

  return (
    <div className="bg-gray-700 p-4">
      <div className="container mx-auto flex flex-col items-center">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search movies..."
          className="w-full max-w-lg bg-gray-800 text-white px-4 py-2 rounded-md focus:outline-none"
        />
        <div className="w-full max-w-lg mt-2 bg-gray-800 rounded-md">
          {suggestions.length > 0 && (
            <ul className="divide-y divide-gray-700">
              {suggestions.map((movie) => (
                <li
                  key={movie.id}
                  className="p-2 hover:bg-gray-700 cursor-pointer text-white"
                  onClick={() => handleSuggestionClick(movie.id)}
                >
                  <div className="flex gap-2">
                    {!movie.image && (
                      <img
                        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                        alt="Movie Poster"
                        className="h-10 w-10"
                      />
                    )}
                    {movie.title} ({movie.release_date?.slice(0, 4)})
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
        <button
          onClick={onClose}
          className="mt-2 text-gray-400 hover:text-white focus:outline-none"
        >
          <XMarkIcon className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

// Adding PropTypes Validation
Search.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default Search;
