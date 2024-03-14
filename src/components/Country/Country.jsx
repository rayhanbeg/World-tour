import { useState } from 'react'
import './country.css'
const Country = ({country, handleVisitedCountries}) => {
    const {name, flags, population, area, cca3} = country
    const [visited, setVisited] = useState(false)

    // const handleVisited = () => {
    //     setVisited(true)
    // }

    
    return (
        <div className={`countries ${visited && 'visited'}`}>
            <h3>name : {name.common}</h3>
            <img className='radius' src={flags.png} alt="" />
            {/* <p>language : {languages.ara}</p> */}
            <p>population : {population}</p>
            <p>area : {area}</p>
            <p>Code : {cca3}</p>
            <button onClick={() => handleVisitedCountries(country)}>Mark Visited</button>
            <br />
            <button className='mr' onClick={setVisited}>{visited ? 'Visited' : 'Going'}</button>
            {visited ? 'i have visited this country' : 'i want to visit'}
        </div>
    );
};

export default Country;