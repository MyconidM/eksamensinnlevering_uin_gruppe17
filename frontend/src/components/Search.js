import { useEffect, useState } from "react"
import Results from "./Results"

export default function Search({setSearch, search, searchGames}){
  


return (
      <div className="col col-sm-4 serch">
                <input className="form-control mt-2"
                    type="search"
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                    placeholder="Søk på spill...">
                </input>
                <button type="submit" onClick={searchGames}>Searchz</button> 
            </div>
    );
}