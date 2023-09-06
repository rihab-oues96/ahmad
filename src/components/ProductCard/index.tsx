import Image from "next/image";
import React from "react";
import styles from "./productCard.module.scss";
import compare from "../../assets/icons/compare.svg";
import like from "../../assets/icons/like.svg";
import share from "../../assets/icons/share.svg";

const ProductCard = ({ product, key }: any) => {
  return (
    <div className={styles.product_card} key={key}>
      <div className={styles.product_card_overlay}>
        <div className={styles.btn_add_to_cart}>
          <p>Add to cart</p>
        </div>

        <div className={styles.actions}>
          <p>
            <Image src={share} alt="share icon" /> Share
          </p>
          <p>
            <Image src={like} alt="like icon" /> Compare
          </p>
          <p>
            <Image src={compare} alt="compare icon" /> Like
          </p>
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
