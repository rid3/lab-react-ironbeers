
import axios from "axios"
import { useEffect, useState } from "react"
import Header from "../components/Header"


function RandomBeer() {

 const [ random, setRandom ] = useState(null)

 useEffect ( () => {
   getRandom()
 }, [])

 const getRandom = async () => {
   const response = await axios.get ("https://ih-beers-api2.herokuapp.com/beers/random")
   setRandom(response.data)
 }

 if(!random) {
   return (
     <h3>...ahí nomás llega la info</h3>
   )
 }

  return (
    <div>

    <Header />

      <h1>RANDOM BEER</h1>

      <img width="70px" src={random.image_url} alt="beerpic" />
      <h3>{random.name}</h3>
      <p>{random.tagline}</p>
      <p>Firt Brewed: {random.first_brewed}</p>
      <p>Attenuation leve: {random.attenuation_level}</p>
      <br />
      <h4>{random.description}</h4>
      <p>Contributed by: {random.contributed_by}</p>
   
      
    </div>
  )
}
export default RandomBeer