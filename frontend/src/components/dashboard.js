import Main from "./Main";
import MyGamesPage from "./MyGamesPage";
import GameShop from "./gameshop";
//https://stackoverflow.com/questions/57236204/how-to-return-only-3-elements-from-arrays-of-object-in-react
export default function Dashboard ({gameInfo, genreInfo}) {
   
 return (
    <div>
      <div className="gameShop">
         <GameShop gameInfo={gameInfo.slice(0, 3)} />
      </div>
      <div className="MyGames">
         <MyGamesPage genreInfo={genreInfo.slice(0, 4)} />
      </div>
      <div className="favorite">
         

      </div>
    </div>
 )
}