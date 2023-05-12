import { useEffect, useState } from "react"
import Dashboard from "./dashboard";

// https://stackoverflow.com/questions/73761980/rawg-io-api-call-javascript-to-display-in-html
export default function Main(){

    const [games, setGames] = useState([])

    async function fetchData() {
        const url = 'https://api.rawg.io/api/games?key=834628e421154a1e8191857d89debae3';
        const response = await fetch(url).then(response => response?.json());
        setGames(response?.games)

        return response
      }
      document.addEventListener("DOMContentLoaded", async () => {
        let games = [];
        try {
            games = await fetchData();
        } catch (e) {
            console.log("Error!");
            console.log(e);
        }
        console.log(games);
      });

      window.onload = function appendData() {
        console.log('The games will load now.');
      }
      return (
    
        <>
        
            <div id="games"> 
            <h2>{games.results[1].name}</h2>
            </div>
        </>
     )
      }