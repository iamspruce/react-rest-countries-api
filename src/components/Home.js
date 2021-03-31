import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import Error from './Error';
import Card from './Card';
import { Link } from 'react-router-dom';

const Search = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
    const [q, setQ] = useState("");
    const [f] = useState(["capital","name"]);
    const [c, setC] = useState(['All']);

  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, []);
    
    
  function search(items) {
    return items.filter((row) => {
      if (row.region == c) {
        return f.some(
          (column) => {
           return row[column].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
          }
        )
      } else if (c == 'All') {
        return f.some(
          (column) => {
           return row[column].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
          }
        )
      } 
    })       
    };
    if (error) {
      return (
        <>        
        <Error text="Countries" msg={error.message} />
      </>
      ) 
    } else if (!isLoaded) {
      return (
          <>
        <Loading text="Countries" />
      </>
      )
    } else {
      return (
        <>
  <div className="search-wrapper">
          <label htmlFor="search-form">
            <input type="search" name="search-form" id="search-form" className="search-input" placeholder="Search for..." value={q} onChange={(e) => setQ(e.target.value)}
            />
            <span className="sr-only">
              Search countries here
            </span>
          </label>
          <div className="select">
          <select
                onChange={e => {
                  setC(e.target.value);
                }}
                className="custom-select" aria-label="Filter Countries By Countries">
                <option value="All">Filter By Region</option>
                <option value="Africa">Africa</option>
                <option value="Americas">America</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select> 
            <span className="focus"></span>
          </div>
        </div>
        <ul className="card-grid">
          {search(items).map(item => (
            <li>
              <Link to={`/${item.name}`}>
              <Card id={item.callingCodes} flag={item.flag} name={item.name} population={item.population} region={item.region} capital={item.capital} />
            </Link>
            </li>
          ))}
        </ul>
        <div className="marginBtm"></div>
        </>
      );
    }  
  }
  
export default Search
