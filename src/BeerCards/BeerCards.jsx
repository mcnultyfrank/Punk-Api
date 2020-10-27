import React from "react";
import styles from "./BeerCards.module.scss";

const BeerCards = (props) => {
  
    const {showBeers} = props;
    // const {testing} = props;
    
    
  //  console.log(showBeers.map((item) => {
  //   return item.name;
  //  }))

    
    const {name, image_url, abv, tagline} = showBeers;
   
    

  return (

  <div className={styles.mainContainer}>
    <section className={styles.pageContainer}>
   
      <article className={styles.cardContainer}>
        <div className={styles.titleContainer}>
        <h1>{name}</h1>
        </div>
        <img src={image_url} alt="" srcset=""/>
          <h3 className={styles.abv}>{abv}</h3>
          <h3 className={styles.tagline}>{tagline}</h3>
        {/* <button>Stats for nerds</button> */}  
      </article>
   
    </section>
 
    
  </div>
  );
};

export default BeerCards;
