import React from 'react';
import { Link } from "react-router-dom";

export default function Results({gameInfo}){
    return (
        <div>
          {gameInfo.map((game) => (
            <div key={game.id}>
                <img src={game.background_image}></img>
              <h3>{game.name}</h3>
              <p>{game.description}</p>
            </div>
          ))}
        </div>
      );
}