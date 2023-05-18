import { Link } from "react-router-dom";

export default function Nav(){
    return (
        <nav className="navbar">
            <ul>
                <Link to={'./favorites'}>
                    <li>Favorites</li>
                </Link>
                <Link to={'./mygames'}>
                    <li>My Games</li>
                </Link>
                <Link to={'./gamestore'}>
                    <li>Game store</li>
                </Link>
            </ul>
        </nav>
    )
}