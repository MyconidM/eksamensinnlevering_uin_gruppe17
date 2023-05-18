import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import { useEffect, useState } from "react"
import Favorites from './components/favorites';
import Layout from "./components/Layout";
import Main from './components/Main';
import Singlegame from './components/Singlegame';
import appContextProvider from './components/appContext';

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
        <appContextProvider>
          <Routes>
              <Route element={<Layout search={search} setSearch={setSearch} searchGames={searchGames}/>}>
                  <Route path='/' element={<Main gameInfo={gameInfo}/>} />
                  <Route path='/game/:id' element={<Singlegame />}/>
                  <Route path='/favorites' element={<Favorites />}/>
              </Route>
          </Routes>
        </appContextProvider>
      </BrowserRouter>
     
  );

}
