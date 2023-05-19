import { Link } from "react-router-dom";

export default function Nav(){
    return (
        <nav className="navbar">
        <Link to="/">
            <h1>PLAY/HUB</h1>
        </Link>
            <div>
                <Link to={'./mygamespage '}>
                    <span>My Games</span>
                </Link>
                <Link to={'./favorites'}>
                    <span>Favorites</span>
                </Link>
                <Link to={'./gameshop'}>
                    <span>Store</span>
                </Link>
            </div>
        </nav>
    )
}