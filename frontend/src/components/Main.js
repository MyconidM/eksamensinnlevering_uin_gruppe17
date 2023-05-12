
// https://stackoverflow.com/questions/73761980/rawg-io-api-call-javascript-to-display-in-html
export default function Main(){
    async function fetchData() {
        return (await fetch('https://api.rawg.io/api/games?key=834628e421154a1e8191857d89debae3')).json();
      }
      document.addEventListener("DOMContentLoaded", async () => {
        let games = [];
        try {
            games = await fetchData();
        } catch (e) {
            console.log("Error!");
            console.log(e);
        }
        console.log(games);
      });

      window.onload = function appendData() {
        console.log('The games will load now.');
      }


      
}