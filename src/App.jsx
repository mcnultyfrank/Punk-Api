import React from 'react';
import './App.css';
import BeerCards from "./BeerCards";
import SideBar from "./SideBar";
import { useState, useEffect } from 'react';


const App = () => {
  const [showBeers, setShowBeers] = useState([]);
  const [inputValue, setInputValue] = useState("");
  
  const getApi = (search) => {
    fetch("https://api.punkapi.com/v2/beers?" + search)
    .then((res) => res.json())
      .then((response) => {
        setShowBeers(response);
      })
  }

  const searchGetApi = () => {
    const url = "https://api.punkapi.com/v2/beers?beer_name="  + inputValue;
    fetch(url)
    .then((res) => res.json())
      .then((response) => {
        console.log("Here is the response from " + url)
        console.log(response);
        setShowBeers(response);
     
        
      })
  }

  useEffect(getApi, []);
  useEffect(() => {
    console.log("input value is ..." + inputValue)
    if (inputValue) searchGetApi();   
  }, [inputValue]);

  const strongBeers = () => getApi("abv_gt=5");
  const mediumBeers = () => getApi("abv_lt=5");
  const weakBeers = () => getApi("abv_lt=1");
  const strongBitterBeers = () => getApi("ibu_gt=50");
  const mediumBitterBeers = () => getApi("ibu_lt=50");
  const weakBitterBeers = () => getApi("ibu_lt=10");
  
  return (
    <div>
      <SideBar 
      // showBeers = {showBeers}
      updateInput={searchGetApi}
      // 2. pass function down to child component
      handleStrongClick={strongBeers}
      handleMediumClick={mediumBeers}
      handleWeakClick={weakBeers}
      handleStrongBitterClick={strongBitterBeers}
      handleMediumBitterClick={mediumBitterBeers}
      handleWeakBitterClick={weakBitterBeers}
      updateInput={(value) => setInputValue(value)}
      />
      <BeerCards
      showBeers = {showBeers}

      />
       
    </div>
  );
}


export default App;
