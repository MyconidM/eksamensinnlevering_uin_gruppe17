import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import './css/main.css';
import { useEffect, useState } from "react"
import Favorites from './components/favorites';
import Layout from "./components/Layout";
import Dashboard from './components/dashboard';
import GameShop from './components/gameshop';
import MyGamesPage from './components/MyGamesPage';
import AppContextProvider from './components/appContext';
import Nav from './components/Nav';
import SingleGame from './components/Singlegame';



export default function App(){
    const [search, setSearch] = useState('')
    const [gameInfo, setGameInfo] = useState([]);
    const [genreInfo, setGenreInfo] = useState([])
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
      async function GameGenre() {
        const apiKey = '834628e421154a1e8191857d89debae3'; 
        const url = `https://api.rawg.io/api/games?key=${apiKey}&genres=indie`;
    
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

    async function fetchNewestGames() {
      const current = new Date();
      const date = `${current.getFullYear()}-${current.getMonth()+1}-${current.getDate()}`;
      console.log(date)
      const apiKey = '834628e421154a1e8191857d89debae3'; 
      const url = `https://api.rawg.io/api/games?key=${apiKey}&dates=2021-01-01,${date}&ordering=-released&page_size=10`;
  
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
                <Route path='/' element={<Dashboard gameInfo={gameInfo} genreInfo={genreInfo} search={search} setSearch={setSearch} searchGames={searchGames}/>} />
                <Route path='/gameshop' element={<GameShop gameInfo={gameInfo} search={search} setSearch={setSearch} searchGames={searchGames}/>} />
                <Route path='/MyGamesPage' element={<MyGamesPage genreInfo={genreInfo}/>} />
                <Route path='/favorites' element={<Favorites />}/>
                <Route path='/game/:id' element={<SingleGame />}/>
            </Route>
        </Routes>
        </AppContextProvider>

      </BrowserRouter>
     
  );

}
