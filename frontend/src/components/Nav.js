import { Link } from "react-router-dom";

export default function Nav(){
    return (
        <nav>
            <ul>
                <Link to={'/Main'}>
                    <li>Main</li>
                </Link>
                <Link to={'/Search'}>
                    <li>Search</li>
                </Link>
            </ul>
        </nav>
    )
}