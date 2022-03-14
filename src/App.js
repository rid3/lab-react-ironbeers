
import './App.css';

//Acá se organizan las Routes
import { Route, Routes } from "react-router-dom";

//importando componentes 
import Home from "./pages/Home";
import RandomBeer from "./pages/RandomBeer"
import NewBeer from "./pages/NewBeer"
import ListBeer from './pages/ListBeer';
import BeerDetails from './pages/BeerDetails';
import Search from './components/Search';


function App() {

 
  return (
    <div className="App">

    <Routes>

    <Route path="/" element={ <Home /> } />
    <Route path="/beers" element = { <ListBeer /> } />
    <Route path="/beers/:id" element = { <BeerDetails /> } />
    <Route path="/random-beer" element = { <RandomBeer /> } />
    <Route path="/new-beer" element = { <NewBeer /> } />

    <Route path="/search/:query" element={ <Search /> } />


    </Routes>


    </div>
  );
}

export default App;
