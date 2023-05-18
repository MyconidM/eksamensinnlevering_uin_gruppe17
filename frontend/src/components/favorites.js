import { useState } from "react";
import Results from "./Results";

//https://www.youtube.com/watch?v=oU2c_02YaME&t=2342s
export default function Favorites(game) {
    const [favorties, setFavorties] = useState([]);
    return (
        <>
        <h1>Favoritter</h1>
        <Results favorties={favorties} />
        </>
    )
   }