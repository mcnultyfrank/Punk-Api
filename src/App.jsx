import React from 'react';
import './App.css';
import BeerCards from "./BeerCards";
import SideBar from "./SideBar";
import { useState, useEffect } from 'react';


function App() {
  const getApi = (searchTerm) => {
    fetch("https://api.punkapi.com/v2/beers?"  + searchTerm)
    .then((res) => res.json())
      .then((response) => {
        console.log(response);
        setShowBeers(response);
    

      })
  }

  
  const [searchBeers, setSearchBeers] = useState('');
  const [showBeers, setShowBeers] = useState('');

  useEffect(getApi, []);

  // console.log(showBeers);
  
  
  
  return (
    <div>
      <SideBar updateBeers = {getApi} showBeers = {showBeers}/>
      <BeerCards  showBeers = {showBeers}/>
      
      
    </div>
  );
}

export default App;
