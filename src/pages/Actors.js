import React, { useEffect, useState } from "react";



function Actors() {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    const fetchActors = async () => {
      try {
        const response = await fetch("https://api.example.com/actors");
        if (!response.ok) {
          throw new Error("Failed to fetch actors");
        }
        const actorData = await response.json();
        setActors(actorData);
      } catch (error) {
        console.error("Error fetching actors:", error);
      }
    };

    fetchActors();
  }, []);

  return (
    <>
      <header>
        <h1>Actors Page</h1>
      </header>
      <main>
        {actors.map((actor) => (
          <article key={actor.id}>
            <h2>{actor.name}</h2>
            <ul>
              {actor.movies.map((movie, index) => (
                <li key={index}>{movie}</li>
              ))}
            </ul>
          </article>
        ))}
      </main>
    </>
  );
}

export default Actors;
