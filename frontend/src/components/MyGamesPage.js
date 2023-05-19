import { useEffect, useState } from "react";
import MyGames from "./mygames";

export default function MyGamesPage({genreInfo}){
    
    return (
        <section>
            <h1>My Games-Library</h1>
            <div>
                <MyGames genreInfo={genreInfo} />
            </div>
        </section>
     )
  }