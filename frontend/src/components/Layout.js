import { Link, Outlet } from "react-router-dom";
import Nav from "./Nav";
import Search from "./Search";
import Footer from "./Footer";

export default function Layout(){
    return (
        <div id="container">
          <header>
            
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