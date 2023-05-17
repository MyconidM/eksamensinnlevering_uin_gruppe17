import { useEffect, useState } from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import Search from './Search';
import Favorites from './favorites';
import GameCard from './GameCard';
import Results from "./Results";

export default function Main(){
const [search, setSearch] = useState('last')
      
    async function fetchNewestGames() {
      const apiKey = '834628e421154a1e8191857d89debae3'; 
      const url = `https://api.rawg.io/api/games?key=${apiKey}&dates=2021-01-01,2023-05-16&ordering=-released&page_size=10`;
  
      try {
      const response = await fetch(url);
      const data = await response.json();
  
      
      console.log(data.results);
      } catch (error) {
      console.log('Error:', error);
      }

      
  }
  fetchNewestGames()

  

  return (
    <Router>
      <div className='app'>
        <Nav />
        <Search search={search} setSearch={setSearch}/>
        <Routes>
            <Route path="/" index element={Main} />
            <Route exact path='/favorites' Component={Favorites} />
        </Routes>
        <Results gameInfo={gameInfo} />
      </div>
    </Router>
  );

}