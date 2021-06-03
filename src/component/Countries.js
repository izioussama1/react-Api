import React from 'react'
import './Countries.css'

function Countries({ name, capital, languages, flag, region, population, alpha2Code, alpha3Code }) {
    return (
        <div className="card">
            <div className="image">
                <img src={flag} alt="flag" />
            </div>
            <div className="countries-details">
                <h2 className='country-name'>{name}</h2>
                <p> Capital : {capital}</p>
                <p> Language :
                    {languages.map(language => <span key={languages.name}> {language.name}</span>)}
                </p>
                <p>region : {region}</p>
                <p>population : {population}</p>
                <p className="alph2" > Alpha‑2 code	 : {alpha2Code} </p>
                <p className="alph3"> Alpha‑3 code	 : {alpha3Code} </p>
            </div>


            <div>
                <button className="add">Add</button>
            </div>
        </div>
    )
}

export default Countries