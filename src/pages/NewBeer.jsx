import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Header from "../components/Header"


function NewBeer() {

  //los forms se manejan con componentes controlados en REACT, input controladito por el estado.
  //en el estado tienen que llamarse igual a como estan en la base de datos para que funcione?
 const [ name, setName ] = useState("")
 const [ tagline, setTagline ] = useState("")
 const [ description, setDescription ] = useState("")
 const [ first_brewed, setFirstBrewed ] = useState("")
 const [ brewers_tips, setBrewerTips ] = useState("")
 const [ attenuation_level, setAttenuationLevel ] = useState(0)
 const [ contributed_by, setContributedBy ] = useState("")

const navigate = useNavigate() //el hook para poder redireccionar a otra página
 

//---handle submit para controlar el funcionamiento del form. ----------------
 const handleSubmit = async (event) => {
    event.preventDefault()

   //enviamos los nuevos estados al endpoint para crear la nueva cerveza
   const newBeer = { name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by }
   //ruta post del BE
   await axios.post ("https://ih-beers-api2.herokuapp.com/beers/new", newBeer) //acá le decis que vaya a actualizar alfo en esa ruta, usando el segundo parámetro que le mandas.

   //redireccionar al usuario una vez terminada la llenada de datos. 
   navigate("/beers")



  } 


  return (
    <div>

    <Header />

    <h1>NEW BEER</h1>

    <form onSubmit= { handleSubmit } >

    <label htmlFor="name">Name: </label>
    <input 
    type="text"
    name="name"
    value= {name}
    onChange= { (event) => setName(event.target.value) }

     />
     <br />
     <br />
     <label htmlFor="tagline">Tagline:</label>
     <input 
     type="text"
     name="tagline"
     value={tagline}
     onChange= { (event) => setTagline(event.target.value) }

      />
      <br />
      <br />
      <label htmlFor="description">Description: </label>
      <input 
      type="text"
      name="description"
      value={description}
      onChange= { (event) => setDescription(event.target.value) }
       />
       <br />
       <br />

       <label htmlFor="first_brewed">First Brewed: </label>
       <input 
       type="text"
       name="first_brewed"
       value={first_brewed}
       onChange= { (event) => setFirstBrewed(event.target.value) }
        />
      <br />
      <br />

      <label htmlFor="brewers_tips">Brewer Tips: </label>
       <input 
       type="text"
       name="brewers_tips"
       value={brewers_tips}
       onChange= { (event) => setBrewerTips(event.target.value) }
        />
        <br />
        <br />

        <label htmlFor="attenuation_level">Attenuation Level: </label>
        <input 
        type="number"
        name="attenuation_level"
        value={attenuation_level}
        onChange= { (event) => setAttenuationLevel(event.target.value) }
         />
         <br />
         <br />

         <label htmlFor="contributed_by">Contributed by: </label>
         <input 
         type="text"
         name="contributed_by"
         value={contributed_by}
         onChange= { (event) => setContributedBy(event.target.value) }
          />
          <br />
          <br />
          <br />

          <button>Add New Beer!</button>


    </form>

    </div>
  )
}

export default NewBeer