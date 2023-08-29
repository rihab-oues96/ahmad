import Image from "next/image";
import React from "react";

import styles from "./serviceComponent.module.scss";

type Card = { icon: string; title: string; description: string };



const ServiceCard = (card: Card) => {
  return (
    <div className={styles.service_card}>
      <Image src={card.icon} alt="card icon" className={styles.service_icon} />

      <div className={styles.typography}>
        <p className={styles.card_title}>{card.title}</p>
        <span className={styles.card_description}>{card.description}</span>
      </div>
    </div>
  );
};

export default ServiceCard;
