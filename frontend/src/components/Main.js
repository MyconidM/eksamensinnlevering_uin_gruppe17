import { useEffect, useState } from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import Search from './Search';
import Favorites from './favorites';
import Results from "./Results";
import Singlegame from "./Singlegame";

export default function Main(){
    const [search, setSearch] = useState('')
    const [gameInfo, setGameInfo] = useState([]);
    let slug = search.split(' ').join('-').toLowerCase()
      
    async function searchGames() {
      const apiKey = '834628e421154a1e8191857d89debae3'; 
      const url = `https://api.rawg.io/api/games?key=${apiKey}&search=${slug}`;
  
      try {
        const response = await fetch(url);
        const data = await response.json();
    
        console.log(data.results);
        setGameInfo(data.results); // Set the fetched data to gameInfo
      } catch (error) {
        console.log('Error:', error);
      }
    }
    
    useEffect(() => {
        // Fetch top movies when the component mounts
        searchGames();
      }, []);  
    
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
        <Search search={search} setSearch={setSearch} searchGames={searchGames}/>
        <Routes>
            <Route path="/" index element={Main} />
            <Route exact path='/favorites' Component={Favorites} />
            <Route exact path='/singlegame' Component={Singlegame} />
        </Routes>
        <Results gameInfo={gameInfo} />
      </div>
    </Router>
  );

}