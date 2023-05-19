import { useEffect, useState } from "react";
import MyGames from "./mygames";

export default function MyGamesPage({genreInfo}){
    
    return (
        <section>
            <h2>LIBRARY</h2>
            <div>
                <MyGames genreInfo={genreInfo} />
            </div>
        </section>
     )
  }