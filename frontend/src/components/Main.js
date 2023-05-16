import { useEffect, useState } from "react"
import Dashboard from "./dashboard";

// https://stackoverflow.com/questions/73761980/rawg-io-api-call-javascript-to-display-in-html
export default function Main(){

    const [games, setGames] = useState([]);
    const [gameInfo, setGameInfo] = useState([]);
    const [search, setSearch] = useState('james+bond')

      return (
    
        <>
        
            <div id="games"> 
            </div>
        </>
     )
      }