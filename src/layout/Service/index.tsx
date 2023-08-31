import { serviceCards } from "@/data";
import Image from "next/image";
import React from "react";

import styles from "./service.module.scss";

const Service = () => {
  return (
    <section className={styles.section_service}>
      {serviceCards.map((card: any, index: number) => (
        <div key={index} className={styles.service_card}>
          <Image
            src={card.icon}
            alt="card icon"
            className={styles.service_icon}
          />

          <div className={styles.typography}>
            <p className={styles.card_title}>{card.title}</p>
            <span className={styles.card_description}>{card.description}</span>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Service;
