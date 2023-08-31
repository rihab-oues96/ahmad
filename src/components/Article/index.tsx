import React, { ReactNode } from "react";
import Image from "next/image";
import styles from "./article.module.scss";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface ArticleProps {
  title: string;
  image: string | StaticImport;
}

function Article({ title, image }: ArticleProps) {
  return (
    <figure className={styles.figure}>
      <Image
        src={image}
        alt="Article Image"
        objectFit="cover"
        className={styles.image}
      />
      <h3 className={styles.typographie}>{title}</h3>
    </figure>
  );
}

export default Article;
