import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './css/main.css'
import Main from './components/Main';
import Nav from './components/Nav';
import Search from './components/Search';
import GameCard from './components/GameCard';

function App() {
 
  return (
    <Router>
      <div className='app'>
        <Nav />
        <Routes>
            <Route exact path='/Main' Component={Main} />
            <Route exact path='/Search' Component={Search} />
            <Route path='/game/:name' Component={GameCard} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
