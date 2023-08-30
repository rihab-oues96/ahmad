import React from "react";
import styles from "./newCollection.module.scss";

const NewCollection = () => {
  return (
    <div className={styles.new_collection}>
      <p className={styles.new}>New Arrival</p>
      <p className={styles.new_collection_title}>
        Discover Our <br />
        New Collection
      </p>

      <p className={styles.new_collection_description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
        luctus nec ullamcorper mattis.
      </p>

      <div className={styles.buy_now}>
        <p>BUY Now</p>
      </div>
    </div>
  );
};

export default NewCollection;
