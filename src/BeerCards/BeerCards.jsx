import React, {useEffect} from "react";
import styles from "./BeerCards.module.scss";
import SideBar from "../SideBar"
import Card from "./Card/Card";
 

const BeerCards = (props) => {

    const {showBeers} = props;

  return (

  <div className={styles.mainContainer}>
    <section className={styles.pageContainer}>
      {showBeers.map((beer)=> {
        return <Card key={beer.id} beer={beer} />
      })}
    </section>

  </div>
  );
};

export default BeerCards;
