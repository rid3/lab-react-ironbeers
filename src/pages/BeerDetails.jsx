import React from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import Header from '../components/Header'

function BeerDetails() {

    const { id } = useParams() //de acá obtenemos la información del id que nos pasan por el URL

    const [ details, setDetails ] = useState(null)

    useEffect ( () => {
        getDetails()
    } )

    const getDetails = async () => {
        const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
        //console.log(response) 
        setDetails(response.data)
        //response trae todo, response.data, nos trae la info que queremos
    }

    //temilla con el null
    if(!details) {
        return (
            <h3>...aguantame un cachito</h3>
        )
    } 

  return (
    <div>

    <Header /> 

    <h1>Beer Details</h1>

    <img width="100px" src={details.image_url} alt="beerPic"/>
    <h3>{details.name}</h3>
    <p>{details.tagline}</p>
    <p>Firt Brewed: {details.first_brewed}</p>
    <p>Attenuation leve: {details.attenuation_level}</p>
    <br />
    <h4>{details.description}</h4>
    <p>Contributed by: {details.contributed_by}</p>

    </div>
  )
}

export default BeerDetails