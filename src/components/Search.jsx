import React from 'react'
import { useState } from 'react'
import TextField from "react"

//esto fue una prueba que ndé, que no  cocinar 

function Search(props) {

    const [ search, setSearch ] = useState()

    const handleSearch = (event) => {
        setSearch(event.target.value)
        props.searchBeers(event.target.value)
    }




  return (
    <div>
    <TextField  label ="Search" type="text" name="search" value={search} onChange= { handleSearch } />

    </div>
  )
}

export default Search