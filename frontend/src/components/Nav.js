import { Link } from "react-router-dom";

export default function Nav(){
    return (
        <nav className="navbar">
            <ul>
                <Link to={'./favorites'}>
                    <li>Favorites</li>
                </Link>
                <Link to={'./dashboard'}>
                    <li>Game store</li>
                </Link>
            </ul>
        </nav>
    )
}