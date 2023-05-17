import { useEffect, useState } from "react"
import Results from "./Results"

export default function Search( item){
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
  if (search.length >= 3) {
 searchGames();
}

}, [search]);

return (
      <div className="col col-sm-4 serch">
                <input className="form-control mt-2"
                    type="search"
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                    placeholder="Søk på spill...">
                </input>
            </div>
    );
}