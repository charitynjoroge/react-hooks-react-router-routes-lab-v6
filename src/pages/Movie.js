import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await fetch(`https://api.example.com/movies/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch movie");
        }
        const movieData = await response.json();
        setMovie(movieData);
      } catch (error) {
        console.error("Error fetching movie:", error);
      }
    };

    fetchMovie();
  }, []);

  if (!movie) {
    return <div>Loading...</div>;
  }

  const { title, time, genres } = movie;

  return (
    <>
      <header>
        <h1>{title}</h1>
      </header>
      <main>
        <p>Time: {time}</p>
        <div>
          Genres:
          {genres.map((genre, index) => (
            <span key={index}>{genre}</span>
          ))}
        </div>
      </main>
    </>
  );
}

export default Movie;
