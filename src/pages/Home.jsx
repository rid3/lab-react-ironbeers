
import { Link } from "react-router-dom";

function Home() {
  return (

    <div>

    <h1>THE ENDLESS LOVESTORY ABOUT IRONHACKERS AND BEER</h1>

 
    
    <Link to="/beers">
    <img src="../assets/beers.png" alt="beers" />
    <h3>All Beers</h3>
    <p>Go ahaed and enter the world of all the beers we can show you!</p>
    </Link>
   

    <br />
    <br />
    <br />

 
    <Link to="/random-beer">
      <img src="../assets/random-beer.png" alt="random beers" />
      <h3>Random Beer</h3>
      <p>Access a random beer, and be sorprised...</p>
    </Link>
   


    <br />
    <br />
    <br />


    <Link to="/new-beer">
      <img src="../assets/new-beer.png" alt="new beer" />
      <h3>Create a New Beer</h3>
      <p>Fill free to add a new beer to out list</p>
    </Link>
  

    



    </div>
  )
}

export default Home