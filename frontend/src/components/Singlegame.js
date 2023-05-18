import React from 'react';
import { useParams } from "react-router-dom";

export default function Singlegame({gameInfo}) {
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


  

