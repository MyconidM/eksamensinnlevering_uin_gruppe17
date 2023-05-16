import { useState } from "react"
import Results from "./Results"

export default function Search(){
    const [searchTerm, setSearchTerm] = useState("")
    const [gameResults, setGameResults] = useState([])
  
    const handleChange = (e) => {
      setSearchTerm(e.target.value)
    }
  
    const onSubmit = (e) => {
      e.preventDefault()
      let slug = searchTerm.split(' ').join('-').toLowerCase()
  
      setGameResults([])
      fetch(`https://rawg.io/api/games?search=${slug}&key=b6c978869e0a4c758a232a42f2296362`)
      .then(resp => resp.json())
      .then(({results}) => {
        results === undefined ? alert('no games found') : setGameResults(results)
      })
      setSearchTerm("")
    }
  
    return (
      <div className="game-search">
        <h1>Game Search</h1>
          <form onSubmit={onSubmit}>
            <input type="text" value={searchTerm} onChange={handleChange}/>
            <br></br>
            <input type="submit"/>
          </form>
          <Results gameResults={gameResults} />
      </div>
    );
}