import React from "react";
import NewCollection from "../../components/NewCollection";
import styles from "./cover.module.scss";

const Cover = () => {
  return (
    <section className={styles.section_cover}>
      <NewCollection />
    </section>
  );
};

export default Cover;
