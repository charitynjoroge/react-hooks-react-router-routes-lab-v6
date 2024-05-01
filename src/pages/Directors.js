import React, { useEffect, useState } from "react";

function Directors() {
  const [directors, setDirectors] = useState([
    { id: 1, name: "Director 1", movies: ["Movie A", "Movie B"] },
    { id: 2, name: "Director 2", movies: ["Movie C", "Movie D"] },
    { id: 3, name: "Director 3", movies: ["Movie E", "Movie F"] },
  ]);

  useEffect(() => {
    const fetchDirectors = async () => {
      try{
        const response = await fetch("https://api.example.com/directors");
        if (!response.ok) {
          throw new Error("Failed to fetch directors");
        }
        const directorData = await response.json();
        setDirectors(directorData);
      } catch (error) {
        console.error("Error fetching directors:", error);
      }
    };

    fetchDirectors();
  }, []);

  return (
    <>
      <header>
        <h1>Directors Page</h1>
      </header>
      <main>
        {directors.map((director) => (
          <article key={director.id}>
            <h2>{director.name}</h2>
            <ul>
              {director.movies.map((movie, index) => (
                <li key={index}>{movie}</li>
              ))}
            </ul>
          </article>
        ))}
      </main>
    </>
  );
}

export default Directors;
