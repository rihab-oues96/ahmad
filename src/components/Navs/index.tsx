import React from "react";
import styles from "./navs.module.scss";

type navsType = {
  component?: string;
};

const Navs = (component: navsType) => {
  console.log(component);

  return (
    <ul className={`${styles.navs} `}>
      <li>Home</li>
      <li>Shop</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  );
};

export default Navs;
