import React from "react";
import Article from "../Article";
import styles from "./articleGroup.module.scss";
import Dining from "../../assets/images/dining.svg";
import Living from "../../assets/images/living.svg";
import Bedroom from "../../assets/images/bedroom.svg";

function ArticleGroupe() {
  return (
    <section className={styles.articleGroupe}>
      <h2 className={styles.title}>Browse The Range</h2>
      <p className={styles.typographie}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <div className={styles.articles}>
        <Article image={Dining} title="Dining" />
        <Article image={Living} title="Living" />
        <Article image={Bedroom} title="Bedroom" />
      </div>
    </section>
  );
}

export default ArticleGroupe;
