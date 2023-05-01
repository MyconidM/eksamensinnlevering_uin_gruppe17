import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MovieCard from "./MovieCard";
import MovieCardHeading from "./MovieCardHeading";
import SearchBox from "./SearchResults";

// funksjonen er basert på  løsningen vis i https://www.youtube.com/watch?v=jc9_Bqzy2YQ
export default function Main(){

    const [movies, setMovies] = useState([]);
    const [movieInfo, setMovieInfo] = useState([]);
    const [searchValue, setSearchValue] = useState ('James Bond')
    
    const getMovieRequest = async () => {
        const url =`http://www.omdbapi.com/?s=${searchValue}&type=movie&apikey=70816349`

        const response = await fetch(url).then(response => response.json());
        setMovies(response.Search)
        return response
    }
// løsningn for getMovieInfo fikk jeg hjelp av medstudenter og studass for å løse 
    const getMovieInfo = async () => {
        const { Search: search } = await getMovieRequest();
        const movieInfoPromises = search.map(async movie => {
          const url = `http://www.omdbapi.com/?i=${movie.imdbID}&type=movie&apikey=70816349`;
          const response = await fetch(url);
            return await response.json();
        });
        const movieInfo = await Promise.all(movieInfoPromises);
        setMovieInfo(movieInfo);
      };


    useEffect(() => {
        getMovieInfo()
        console.log(movieInfo)
    }, [searchValue])

    

}