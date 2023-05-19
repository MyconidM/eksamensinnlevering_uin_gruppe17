import { Link } from "react-router-dom";

export default function Nav(){
    return (
        <nav className="navbar">
        <Link to="/">
            <h1>PLAY/HUB</h1>
        </Link>
            <div>
                <Link to={'./mygamespage'}>
                    <span className="navoptions">MY GAMES</span>
                </Link>
                <Link to={'./favorites'}>
                    <span className="navoptions">FAVORITES</span>
                </Link>
                <Link to={'./gameshop'}>
                    <span className="navoptions">STORE</span>
                </Link>
            </div>
        </nav>
    )
}