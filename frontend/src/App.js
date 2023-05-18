import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import './css/main.css'
import { useEffect, useState } from "react"
import Favorites from './components/favorites';
import Layout from "./components/Layout";
import Dashboard from './components/dashboard';
import GameShop from './components/gameshop';
import MyGames from './components/mygames';
import Singlegame from './components/Singlegame';
import AppContextProvider from './components/appContext';
import Nav from './components/Nav';

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
      <BrowserRouter>
      <AppContextProvider>
        <Nav />
        <Routes>
            <Route element={<Layout />}>
                <Route path='/' element={<Dashboard/>} />
                <Route path='/gameshop' element={<GameShop gameInfo={gameInfo} search={search} setSearch={setSearch} searchGames={searchGames}/>} />
                <Route path='/mygames' element={<MyGames />} />
                <Route path='/favorites' element={<Favorites />}/>
                <Route path='/game/:id' element={<Singlegame />}/>
            </Route>
        </Routes>
        </AppContextProvider>

      </BrowserRouter>
     
  );

}
