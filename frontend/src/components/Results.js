import React from 'react';
import { useAppContext } from './appContext';
import { useNavigate } from 'react-router-dom';

//https://www.youtube.com/watch?v=oU2c_02YaME&t=2342s
export default function Results({gameInfo}){

    const {favorties, addToFavorites, removeFromFavorites} = useAppContext();

    const navigate = useNavigate();

    const favoriteChecker = (id) => {
        const boolean = favorties.some((game) => game.id === id);
        return boolean
    }
    return (
        <div className='game-package'>
          {gameInfo.map((game) => (
            
            <div className='game-item' key={game.id}>
                <img className='game-posters' src={game.background_image} onClick={() => navigate(`/game/${game.id}`)}></img>
              <h3 className='game-name'>{game.name}</h3>
              <div className='game-genre'>{game.genres.map(genre => (
                <span>{genre.name}, </span>
              ))}</div>
              {favoriteChecker(game.id) ? 
              <button className='button-favorite' onClick={() => removeFromFavorites(game.id)}>Remove from Favorite</button>
            : <button className='button-favorite' onClick={() => addToFavorites(game)}>Add too Favorite</button>}
              <button>Buy</button>
            </div>
          ))}
        </div>
      );
}

