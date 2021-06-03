import React, { useEffect, useState, useReducer } from 'react';
import Countries from './Countries'
import Search from './Search'
import './App.css'


function App() {
  const [countries, setCountrys] = useState([]);

  const fetchData = () => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      .then(data => setCountrys(data));
  }
  useEffect(() => fetchData(), [])






  return (
    <>
      <center className="searchh">
        <Search></Search>
      </center>
      <div className="container">
        {
          countries.map(countries => <Countries {...countries} key={countries.name}></Countries>)
        }
      </div>
    </>
  )

}

export default App