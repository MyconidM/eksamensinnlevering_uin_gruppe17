import { useAppContext } from './appContext';
import { useNavigate } from 'react-router-dom';

//https://www.youtube.com/watch?v=oU2c_02YaME&t=2342s
export default function Favorites(game) {
    const {favorties, addToFavorites, removeFromFavorites} = useAppContext();
    
    const navigate = useNavigate();

    console.log('Favorites are '+favorties)

    const favoriteChecker = (id) => {
        const boolean = favorties.some((game) => game.id === id);
        return boolean
    }
    return (
        <section>
        <h2>Favorites</h2>
        <div className='game-package'>
        {favorties.length > 0 ? favorties.map((game) => (
            
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
          )): <h2>You don't have any favorites yet!</h2>}
        </div>
        </section>
    )
   }