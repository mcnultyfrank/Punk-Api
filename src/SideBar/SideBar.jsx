import React from "react";
import styles from "./SideBar.module.scss";
import SearchBar from './SearchBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRandom } from "@fortawesome/free-solid-svg-icons";
import BeerCards from "../BeerCards";


const SideBar = (props) => {
  const {showBeers} = props;

  // destructuring
  const {updateBeers} = props;
  const searchTerm = (e => updateBeers(e.target.value))
  const random = (e => updateBeers("random"))
  const strongBeer = (e => updateBeers("abv_gt=5"))
  const weakBeer = (e => updateBeers("abv_lt=5"))
  const testing = (e =>  console.log(showBeers.map((item) => {
    return item.name;
   })))



 
  return (
    <div className={styles.sidebarContainer}>
      <section className={styles.sidebarContent}>
    <input className={styles.inputText}type = "text" placeholder ="Greatness awaits you..." onInput={searchTerm}></input>
    <button className={styles.randomButton} onClick={random}><FontAwesomeIcon icon={faRandom} /></button>
    <button className={styles.randomButton} onClick={strongBeer}>5% +</button>
    <button className={styles.randomButton} onClick={weakBeer}>5% -</button>
    <button className={styles.randomButton} onClick={testing}> -</button>




      
      


      </section>
    </div>
  );
};

export default SideBar;
