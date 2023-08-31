import React from "react";
import Article from "../Article";
import styles from "./articleGroup.module.scss";

function ArticleGroupe() {
  return (
    <section className={styles.articleGroupe}>
      <h2 className={styles.title}>Browse The Range</h2>
      <p className={styles.typographie}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <div className={styles.articles}>
        <Article />
        <Article />
        <Article />
      </div>
    </section>
  );
}

export default ArticleGroupe;
