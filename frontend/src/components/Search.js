import { useEffect, useState } from "react"
import Results from "./Results"

export default function Search({setSearch, search, searchGames}){
  


return (
      <div className="col col-small button-search">
                <input className="form-control mt-2"
                    type="search"
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                    placeholder="Search for game ...">
                </input>
                <button type="submit" onClick={searchGames}>Search</button> 
            </div>
    );
}