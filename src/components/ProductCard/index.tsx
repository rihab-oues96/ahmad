import Image from "next/image";
import React from "react";
import styles from "./productCard.module.scss";

const ProductCard = ({ product, key }: any) => {
  return (
    <div className={styles.product_card} key={key}>
      <div className={styles.product_card_overlay}>
        <div className={styles.btn_add_to_cart}>
          <p>Add to cart</p>
        </div>
        <div className={styles.actions}>
          <p>Share</p>
          <p>Compare</p>
          <p>Like</p>
        </div>
      </div>

      <div className={`${styles.product_card_info} ${styles.new}`}>
        <p>New</p>
      </div>

      <Image
        src={product.image}
        alt={product.title}
        className={styles.product_card_image}
      />

      <div className={styles.product_card_typography}>
        <p className={styles.product_card_title}>{product.title}</p>
        <p className={styles.product_card_description}>{product.description}</p>
        <p className={styles.product_card_price}>
          {product.price}
          <span></span>
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
