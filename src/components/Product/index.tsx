import React from "react";
import styles from "./product.module.scss";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface ProductProps {
  title: string;
  image: string | StaticImport;
}

function Product({ title, image }: ProductProps) {
  return (
    <div className={styles.productContainer}>
      <Image
        src={image}
        alt="Article Image"
        width={782.125}
        height={521}
        objectFit="cover"
        className={styles.image}
      />
    </div>
  );
}

export default Product;
