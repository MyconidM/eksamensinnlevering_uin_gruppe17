import React from 'react';

export default function Results({gameInfo}){
    return (
        <div className='game-package'>
          {gameInfo.map((game) => (
            
            <div className='game-item' key={game.id}>
                <img className='game-posters' src={game.background_image}></img>
              <h3 className='game-name'>{game.name}</h3>
              <div className='game-genre'>{game.genres.map(genre => (
                <span>{genre.name}, </span>
              ))}</div>
              <button className='button-favorite'>Favorite</button>
              <button className='button-buy'>Buy</button>
            </div>
          ))}
        </div>
      );
}

