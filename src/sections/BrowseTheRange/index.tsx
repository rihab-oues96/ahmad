import React from "react";
import styles from "./BrowseTheRange.module.scss";
import Article from "../../components/Article";
import Dining from "../../assets/images/dining.svg";
import Living from "../../assets/images/living.svg";
import Bedroom from "../../assets/images/bedroom.svg";

const BrowseTheRange = () => {
  return (
    <section className={styles.section_Container}>
      <div className={styles.typography}>
        <h2 className={styles.title}>Browse The Range</h2>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className={styles.articlesGroupe}>
        <Article image={Dining} title="Dining" />
        <Article image={Living} title="Living" />
        <Article image={Bedroom} title="Bedroom" />
      </div>
    </section>
  );
};

export default BrowseTheRange;
