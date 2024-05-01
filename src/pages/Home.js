import React,{ useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import { Link } from "react-router-dom";

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const sampleMovies = [
      { id: 1, title: "Movie 1" },
      { id: 2, title: "Movie 2" },
      { id: 3, title: "Movie 3" },
    ];
    setMovies(sampleMovies);
  }, []);

  return (
    <>
    <header>
      <h1>Home Page</h1>
    </header>
    <main>
      <h2>Movies</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
             <Link to={`/movie/${movie.id}`}/>
            <MovieCard id={movie.id} title={movie.title} />
          </li>
        ))}
      </ul>
    </main>
  </>
  );
};

export default Home;
