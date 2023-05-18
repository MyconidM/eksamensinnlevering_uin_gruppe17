import { Link, Outlet } from "react-router-dom";
import Nav from "./Nav";
import Search from "./Search";
import Footer from "./Footer";

export default function Layout({search, searchGames, setSearch}){
    return (
        <div id="container">
          <header>
            <Link to="/">
                <h1>Game app</h1>
            </Link>
            <Nav />
            <Search search={search} setSearch={setSearch} searchGames={searchGames}/>
          </header>
          <main>
            <Outlet />
          </main>
          <footer>
            <Footer />
          </footer>
        </div>
    )
}