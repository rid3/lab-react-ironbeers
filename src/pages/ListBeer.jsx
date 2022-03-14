
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom"

import Header from "../components/Header";
// import Search from "../components/Search";



function ListBeer() {

    //crear un estado para poder manejar la información que vamos a extraer de la API
    const [ beers, setBeers ] = useState(null)

    //Extrayendo la información de la API con un hook. ( llama al componentDidMount)
    useEffect ( () => {
        getBeers()
    }, [])

    //función para extraer la información de la api con axios, y con async await, y meterla en el estado.
    const getBeers = async () => {
        const response = await axios.get("https://ih-beers-api2.herokuapp.com/beers")
        //console.log(response)
        setBeers(response.data)
    }

   //controlando el tema del null 
   if (!beers) {
       return <h3>...pensan2</h3>
   }

//en cuanto al search no terminé de entender a dónde debería de estar la llamada a la api. 
//    const searchBeer = (searchQuery) => {
//        const filteredBeers = beers.filter((eachBeer) => {
//            return eachBeer.name.includes(searchQuery)
//        })
//        setBeers(filteredBeers)
//    }

  return (
    <div>
      <Header />
      <br />
      <br />
      {/* <Search searchBeer={searchBeer} /> */}

        <h1>List Beers</h1>
        
         { beers.map ( (eachBeer) => {
            return (
                <div key= { eachBeer._id} >
                <br />
                <br />
                <img width= "50px" src={eachBeer.image_url} alt="beerpic"/>
                <h4>{eachBeer.name}</h4>
                <p>{eachBeer.tagline}</p>
                <p>Contributed by: {eachBeer.contributed_by}</p>
                <Link to={`/beers/${eachBeer._id}`}> Details </Link>
                <br />
                <br />
                </div>
            )
        }) }
    </div>
  )
}

export default ListBeer