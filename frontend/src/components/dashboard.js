import MyGamesPage from "./MyGamesPage";
import Favorites from "./favorites";
import GameShop from "./gameshop";
//https://stackoverflow.com/questions/57236204/how-to-return-only-3-elements-from-arrays-of-object-in-react
export default function Dashboard ({gameInfo, genreInfo, search, searchGames, setSearch}) {
   
 return (
    <div>
      <div className="gameShop">
         <GameShop gameInfo={gameInfo.slice(0, 3)} search={search} setSearch={setSearch} searchGames={searchGames}/>
      </div>
      <div className="MyGames">
         <MyGamesPage genreInfo={genreInfo.slice(0, 4)} />
      </div>
      <div className="favorite">
         <Favorites />
      </div>
    </div>
 )
}