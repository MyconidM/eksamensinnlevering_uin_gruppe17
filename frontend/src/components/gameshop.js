import Results from "./Results";
import Search from "./Search";

export default function GameShop ({gameInfo, search, searchGames, setSearch}) {
 return (
    <section>
        <h1>Game Shop</h1>
        <Search search={search} setSearch={setSearch} searchGames={searchGames}/>
        <div>
            <Results gameInfo={gameInfo} />
        </div>
    </section>
 )
}