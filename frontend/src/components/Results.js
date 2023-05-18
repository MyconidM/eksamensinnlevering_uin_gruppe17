import React from 'react';
import { Link } from "react-router-dom";
import Favorites from './favorites';
import Singlegame from './Singlegame';
import { useAppContext } from './appContext';

export default function Results({gameInfo}){
    return (
        <div>
          {gameInfo.map((game) => (
            
            <div key={game.id}>
                <img src={game.background_image}></img>
              <h3>{game.name}</h3>
              <div>{game.genres.map(genre => (
                <span>{genre.name}, </span>
              ))}</div>
              <button >Add too favorits</button>
            </div>
          ))}
        </div>
      );
}

