import React from 'react';
import { useAppContext } from './appContext';

export default function Results({gameInfo}){

    const {favorties, addToFavorites, removeFromFavorites} = useAppContext();

    console.log('Favorites are '+favorties)

    const favoriteChecker = (id) => {
        const boolean = favorties.some((game) => game.id === id);
        return boolean
    }
    return (
        <div className='game-package'>
          {gameInfo.map((game) => (
            
            <div className='game-item' key={game.id}>
                <img className='game-posters' src={game.background_image}></img>
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

