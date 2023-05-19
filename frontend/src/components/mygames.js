import React from 'react';

export default function MyGames({genreInfo}){

    

    return (
        <div className='game-package'>
          {genreInfo.map((game) => (
            
            <div className='game-item' key={game.id}>
                <img className='game-posters' src={game.background_image}></img>
              <h3 className='game-name'>{game.name}</h3>
              <div className='game-genre'>{game.genres.map(genre => (
                <span>{genre.name}, </span>
              ))}</div>
            </div>
          ))}
        </div>
      );
}

