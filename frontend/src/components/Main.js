



export default function Main(){

      
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
    

}