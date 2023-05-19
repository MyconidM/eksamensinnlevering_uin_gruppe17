import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom"; 
import axios from 'axios';

//https://www.youtube.com/watch?v=oU2c_02YaME
export default function SingleGame() {
  const [game, setGame] = useState({});
  const { id } = useParams();

  const apiKey = '834628e421154a1e8191857d89debae3'; 

  useEffect(() => {
    axios.get(
      `https://api.rawg.io/api/games/${id}?key=${apiKey}`
    ).then((res) => {
      setGame(res.data);
    }).catch((err) => console.log(err))
  }, [id]);


  return (
    <>
    <h1>Game details</h1>
    <div className='game-package '>
        <div className='col-sm- game-posters'>
          <img src={game?.background_image} alt='#'/>
        </div>
        <div className='col-lg-'>
          <h2>{game?.name}</h2>
          <p>{game?.rating}</p>
          <p>{game?.genres?.name}</p>
        </div>
    </div>
    
    </>
    
  );
}









  

