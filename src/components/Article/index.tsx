import React from "react";
import Image from "next/image";
import ArticleImage from "../../assets/images/article.svg";
import styles from "./article.module.scss";

function Article() {
  return (
    <figure className={styles.figure}>
      <Image
        src={ArticleImage}
        alt="Article Image"
        width={782.125}
        height={521}
        objectFit="cover"
        className={styles.image}
      />
      <h3 className={styles.typographie}>Dining</h3>
    </figure>
  );
}

export default Article;
