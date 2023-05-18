import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

export default function Singlegame() {
  const { id } = useParams();
  const [game, setGame] = useState(null);

  useEffect(() => {
    // Fetch game details based on the ID
    // Example code, replace it with your API call or data retrieval logic
    fetch(`/api/games/${id}`)
      .then((response) => response.json())
      .then((data) => setGame(data));
  }, [id]);

  console.log(game)
  return (
    <div>
      {game ? (
        <div>
          <h2>{game.name}</h2>
          {game.genres.map(genre => (
            <p>{genre.name}</p>
          ))}
          
          {/* Additional content here */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}









  

