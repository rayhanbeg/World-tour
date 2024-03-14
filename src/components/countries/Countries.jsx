import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    }, [])
    
    const handleVisitedCountries = (countr) =>{
        const newVisitedCountries = [...visitedCountries, countr];
        setVisitedCountries(newVisitedCountries)
    }

    return (
        <div>
            <h3>Countries : {countries.length}</h3>
            <div>
                <h4>Visited Countries : {visitedCountries.length}</h4>
                <ul>
                    {
                        visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                    }
                </ul>
            </div>
          <div className="country">
          {
                countries.map(country => <Country key={country.cca3} country={country} handleVisitedCountries = {handleVisitedCountries}></Country>)
            }
          </div>
        </div>
    );
};

export default Countries;