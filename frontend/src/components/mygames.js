import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function MyGames({genreInfo}){

    const navigate = useNavigate();

    return (
        <div className='game-package'>
          {genreInfo.map((game) => (
            
            <div className='game-item' key={game.id}>
                <img className='game-posters' src={game.background_image} onClick={() => navigate(`/game/${game.id}`)}></img>
              <h3 className='game-name'>{game.name}</h3>
              <div className='game-genre'>{game.genres.map(genre => (
                <span>{genre.name}, </span>
              ))}</div>
            </div>
          ))}
        </div>
      );
}

