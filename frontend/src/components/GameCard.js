import { useState } from "react";

export default function GameCard(props){
    const [readMore, setReadMore] = useState(Array(props.games?.length).fill(false));

    /*const extraContent = (game) => {
        return (
        <div>
            <p>{game.Writer === 'N/A' ? null : "Writers: "+game.Writer}</p>
            <p>{game.Runtime === 'N/A' ? null : "Runtime: "+game.Runtime}</p>
            <p>{game.Plot === 'N/A' ? null : "Plot: "+game.Plot}</p>
        </div>
        )
    };*/

    const toggleReadMore = (index) => {
        const newReadMore = [...readMore];
        newReadMore[index] = !newReadMore[index];
        setReadMore(newReadMore);
    };

    const PlaceholderImg = 'https://via.placeholder.com/300x450?text=No+Poster+Available';
    //https://www.pluralsight.com/guides/how-to-implement-a-read-more-link-in-react
    return (
        <>
        {props.games?.map((game, index) =>
            <div className="col gamecard align-text-center" key={index}>
            <img className="rounded-top imageSy center" src={game.Poster === 'N/A' ? PlaceholderImg : game.Poster} alt={game.type}></img>
            <div className="text-box rounded-bottom">
                <h2>{game.Title}</h2>
                <h5>{game.Year === 'N/A' ? null : "Tear: "+game.Year}</h5>
                <p>{game.Genre === 'N/A' ? null : "Genre: "+game.Genre}</p>
                <p>{game.Director === 'N/A' ? null : "Director: "+game.Director}</p>
                <p>{game.Actors === 'N/A' ? null : "Actors "+game.Actors}</p>
                <p>{game.Awards === 'N/A' ? null : "Awards: "+game.Awards}</p>
                
                <span className="btn"><button className="rounded" onClick={() => toggleReadMore(index)}>{readMore[index] ? "Read Less" : "Read More"}</button></span>
            </div>
            </div>
        )}
        </>
    )
}