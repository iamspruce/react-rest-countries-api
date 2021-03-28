import React, { useState, useEffect } from 'react';
import Btn from './Btn';
import CountryDetail from './CountryDetail';
import Loading from './Loading';
import Error from './Error';
import { Link } from 'react-router-dom';
import { IoArrowBackOutline } from 'react-icons/io5';
const icon = <IoArrowBackOutline size={28} />;

const BorderCountry = ({match}) => {
const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [paramName] = useState([match.params.name]);

  useEffect(() => {
    fetch(`https://restcountries.eu/rest/v2/all`)
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

  if (error) {
    return (
      <>
        <div className="search-wrapper">
          <Link to={'/'}>
            <Btn text={icon} altText="Back" className="btn" />
          </Link>
        </div>
        <Error text={match.params.name} msg={error.message} />
      </>
    )
  } else if (!isLoaded) {
    return (
      <>
        <div className="search-wrapper">
          <Link to={'/'}>
            <Btn text={icon} altText="Back" className="btn" />
          </Link>
        </div>
        <Loading text={match.params.name} />
      </>
    )
  } else {
    return (
      <>
        <div className="search-wrapper">
          <Link to={'/'}>
            <Btn text={icon} altText="Back" className="btn" />
          </Link>
        </div>
        {items.map(item => {
            if (item.alpha3Code == paramName) {
            return <CountryDetail key={item.numericCode} flag={item.flag} name={item.name} nativeName={item.nativeName} population={item.population} region={item.region} subregion={item.subregion} capital={item.capital} topLevelDomain={item.topLevelDomain} currencies={item.currencies[0].name} languages={item.languages[0].name} borders={item.borders} />
                } 
            })
        }
      </>
    );
  }
}

export default BorderCountry
