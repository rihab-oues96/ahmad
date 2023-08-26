import Navs from "@/components/Navs";
import React from "react";
import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_top}>
        <div className={styles.address}>
          <p className={styles.text_logo}>Funiro.</p>

          <span>
            400 University Drive Suite 200 Coral <br />
            Gables,
            <br /> FL 33134 USA
          </span>
        </div>

        <div className={styles.links}>
          <p>Links</p>

          <span>Home</span>
          <span>Shop</span>
          <span>About</span>
          <span>Contact</span>
        </div>

        <div className={styles.help}>
          <p>Help</p>

          <span>Payment Options</span>
          <span>Returns</span>
          <span>Privacy Policies</span>
        </div>

        <div className={styles.newsletter}>
          <p>Newsletter</p>
          <label>
            <input type="text" placeholder="Enter Your Email Address" />
            <button className={styles.btn_subscribe}>SUBSCRIBE</button>
          </label>
        </div>
      </div>

      <div className={styles.footer_bottom}>
        <p className={styles.rights}>2023 furino. All rights reverved</p>
      </div>
    </footer>
  );
};

export default Footer;
