import React from 'react';
import { Link } from "react-router-dom";
import Favorites from './favorites';
import Singlegame from './Singlegame';

export default function Results({gameInfo}){
    return (
        <div className='game-package'>
          {gameInfo.map((game) => (
            
            <div className='game-item' key={game.id}>
                <img className='game-posters' src={game.background_image}></img>
              <Link to={'/Singlegame'}><h3 className='game-name'>{game.name}</h3></Link>
              <p>{game.description}</p>
              <button onClick={<Favorites game={game}/>}>Add too favorits</button>
            </div>
          ))}
        </div>
      );
}

