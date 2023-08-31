import ProductCard from "@/components/ProductCard";
import { productsCardData } from "@/data";
import styles from "./OurProducts.module.scss";

const OurProducts = () => {
  return (
    <section className={styles.section_OurProducts}>
      <p className={styles.section_OurProducts_title}> Our Products</p>

      <div className={styles.products_container}>
        {productsCardData.map((product: any, index: number) => {
          return <ProductCard product={product} key={index} />;
        })}
      </div>

      <div className={styles.Show_More_btn}>
        <p>Show More</p>
      </div>
    </section>
  );
};

export default OurProducts;
