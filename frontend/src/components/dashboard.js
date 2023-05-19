import Main from "./Main";
import MyGamesPage from "./MyGamesPage";
import GameShop from "./gameshop";

export default function Dashboard ({gameInfo, genreInfo}) {
 return (
    <div>
      <div className="gameShop">
         <GameShop gameInfo={gameInfo} />
      </div>
      <div className="MyGames">
         <MyGamesPage genreInfo={genreInfo} />
      </div>
      <div className="favorite">

      </div>
    </div>
 )
}