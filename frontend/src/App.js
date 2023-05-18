import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { useEffect, useState } from "react"
import Favorites from './components/favorites';
import Results from "./components/Results";
import Layout from "./components/Layout";
import Main from './components/Main';
import Dashboard from './components/dashboard';

export default function App(){
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
        setGameInfo(data.results); 
      } catch (error) {
        console.log('Error:', error);
      }
    }
    
    useEffect(() => {
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
    <Router >
      <div className='app'>
        <Routes>
            <Route element={<Layout/>}>
                <Route index element={<Main search={search} setSearch={setSearch} searchGames={searchGames}/>} />
                <Route path='/favorites' element={<Favorites />}/>
                <Route path='/dashboard' element={<Dashboard gameInfo={gameInfo} />} />
            </Route>
        </Routes>
        
      </div>
    </Router>
  );

}
