import { useEffect, useState } from "react";
import Results from "./Results";

export default function MyGames(){
    const [genreInfo, setGenreInfo] = useState([])
    async function GameGenre() {
        const apiKey = '834628e421154a1e8191857d89debae3'; 
        const url = `https://api.rawg.io/api/games?key=${apiKey}&genres=action`;
    
        try {
          const response = await fetch(url);
          const data = await response.json();
      
          console.log(data.results);
          setGenreInfo(data.results); 
        } catch (error) {
          console.log('Error:', error);
        }
      }
      useEffect(() => {
        GameGenre();
      }, []);  
    return (
        <section>
            <h1>My Games</h1>
            <div>
                <Results genreInfo={genreInfo} />
            </div>
        </section>
     )
  }