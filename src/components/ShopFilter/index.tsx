import styles from "./shopFilter.module.scss";
import Image from "next/image";
import filter from "../../assets/icons/filter.svg";
import nodes from "../../assets/icons/nodes.svg";
import list from "../../assets/icons/list.svg";

function ShopFilter() {
  return (
    <div className={styles.shopFilter}>
      <div className={styles.shopFilter_leftside}>
        <div className={styles.shopFilter_filter}>
          <Image
            src={filter}
            alt="filter icon"
            className={styles.filter_icon}
          />
          <p className={styles.filter_typographie}>Filter</p>
          <Image src={nodes} alt="nodes icon" className={styles.nodes} />
          <Image src={list} alt="list icon" className={styles.list} />
        </div>
        <div className={styles.shopFilter_result}>
          Showing 1–16 of 32 results
        </div>
      </div>
      <div className={styles.shopFilter_rightside}>
        <div className={styles.show}>
          <label htmlFor="show">Show</label>
          <input id="show" type="number" placeholder="16" />
        </div>
        <div className={styles.sort}>
          <label htmlFor="sort">Short by</label>
          <input id="sort" type="text" placeholder="Default" />
        </div>
      </div>
    </div>
  );
}

export default ShopFilter;
