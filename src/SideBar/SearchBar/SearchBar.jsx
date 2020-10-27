import React from "react";
import styles from "./SearchBar.module.scss";


const SearchBar = (props) => {
  return (
    <>
    <input type = "text"></input>
    {/* <input className={styles.searchbar}type="text"placeholder="search for beers" onInput={e => updateSearchBeers(e.target.value)}/> */}
    {/* <button onClick={e => updateSearchBeers(e.target.value)}>clickmeforabeer</button> */}
 
    </>
  );
};

export default SearchBar;
