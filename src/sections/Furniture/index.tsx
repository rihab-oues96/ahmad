import { fursImages } from "@/data";
import Image from "next/image";
import React from "react";
import styles from "./furniture.module.scss";

const Furniture = () => {
  return (
    <section className={styles.section_furniture}>
      <div className={styles.section_furniture_top}>
        <p className={styles.subtitle}>Share your step with</p>
        <h1 className={styles.title}>#FurniroFurniture</h1>
      </div>

      <div className={styles.furs_container}>
        {fursImages.map((img, index) => {
          return <Image src={img} alt="img" key={index} />;
        })}
      </div>
    </section>
  );
};

export default Furniture;
