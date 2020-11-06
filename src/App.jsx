import React from 'react';
import './App.css';
import BeerCards from "./BeerCards";
import SideBar from "./SideBar";
import { useState, useEffect } from 'react';


const App = () => {
  // const [searchBeers, setSearchBeers] = useState('');
  const [showBeers, setShowBeers] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const getApi = (searchTerm) => {
    fetch("https://api.punkapi.com/v2/beers?"  + searchTerm)
    .then((res) => res.json())
      .then((response) => {
        setShowBeers(response);
      })
  }

  const searchGetApi = (search) => {
    fetch("https://api.punkapi.com/v2/beers?beer_name?"  + "buzz")
    .then((res) => res.json())
      .then((response) => {
        setShowBeers(response);
        console.log(response);
        
        
        console.log('this is the api log');
        
      })
  }

  useEffect(getApi, []);
  useEffect(searchGetApi, []);
  const strongBeers = () => {
    return getApi("abv_gt=5");
  }
  const mediumBeers = () => {
    return getApi("abv_lt=5");
  }
  const weakBeers = () => {
    return getApi("abv_lt=1");
  }
  return (
    <div>
      <SideBar 
      // showBeers = {showBeers}
      updateInput={searchGetApi}
      // 2. pass function down to child component
      handleStrongClick={strongBeers}
      handleMediumClick={mediumBeers}
      handleWeakClick={weakBeers}



      />
      <BeerCards
      showBeers = {showBeers}

      />
       
    </div>
  );
}


export default App;
