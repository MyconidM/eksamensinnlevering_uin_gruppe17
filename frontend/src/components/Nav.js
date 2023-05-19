import { Link } from "react-router-dom";

export default function Nav(){
    return (
        <nav className="navbar">
        <Link to="/">
            <h1 className="logo">PLAY/HUB</h1>
        </Link>
            <div className="nav-options">
                <Link to={'./mygamespage'}>
                    <li>My Games</li>
                </Link>
                <Link to={'./favorites'}>
                    <li>Favorites</li>
                </Link>
                <Link to={'./gameshop'}>
                    <li>Game store</li>
                </Link>
            </ul>
        </nav>
    )
}