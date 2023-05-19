import { Link, Outlet } from "react-router-dom";
import Footer from "./Footer";

export default function Layout(){
    return (
        <div id="container">
          <main>
            <Outlet />
          </main>
          <footer>
            <Footer />
          </footer>
        </div>
    )
}