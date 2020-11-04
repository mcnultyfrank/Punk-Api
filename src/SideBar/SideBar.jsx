import React from "react";
import styles from "./SideBar.module.scss";
import SearchBar from './SearchBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRandom } from "@fortawesome/free-solid-svg-icons";
import BeerCards from "../BeerCards";


const SideBar = (props) => {
  const {handleStrongClick, handleWeakClick, handleMediumClick} = props;

  return (
    <div className={styles.sidebarContainer}>
      <section className={styles.sidebarContent}>
          <input className={styles.inputText}type = "text" placeholder ="Greatness awaits you..." onInput={(e) => props.updateInput(e.target.value)}></input>
        <form className={styles.beerStrengthRadioForm}>
          <h3>Beer Strength</h3>
            <div className={styles.strongRadio}>
            <label for = "strong">Over 5%</label>
              <input onClick={handleStrongClick} type="radio" id="strong" name = "beerStrength"></input>
            </div>
            <div className={styles.mediumRadio}>
            <label for = "medium">0.5% - 5%</label>
              <input onClick={handleMediumClick} type="radio" id="medium" name = "beerStrength"></input>
            </div>
            <div className={styles.weakRadio}>
            <label for = "weak">Less than 0.5%</label>
              <input onClick={handleWeakClick} type="radio" id="weak" name = "beerStrength"></input>
            </div>
        </form>
      </section>
    </div>
  );
};

export default SideBar;
