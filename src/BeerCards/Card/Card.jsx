import React from "react";
import styles from "../BeerCards.module.scss";



const Card = (props) => {
    const {name, image_url, abv, tagline} = props.beer;

    return (
            <article className={styles.cardContainer}>
                    <div className={styles.titleContainer}>
                        <h1>{name}</h1>
                    </div>
                <img src={image_url} alt="picture of beer"/>
                <h3 className={styles.abv}>{abv}%</h3>
                <h3 className={styles.tagline}>{tagline}</h3>
            </article>
        
    )

};

export default Card;
