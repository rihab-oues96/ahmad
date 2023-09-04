import Image from "next/image";
import React from "react";
import styles from "./header.module.scss";
import logo from "../../assets/images/full_logo.svg";
import user_icon from "../../assets/icons/user.svg";
import search_icon from "../../assets/icons/search.svg";
import heart_icon from "../../assets/icons/heart.svg";
import shopping_icon from "../../assets/icons/shopping.svg";
import Navs from "@/components/Navs";
import menu from "../../assets/icons/menu.png";

const iconsNavs = [
  { icon: user_icon },
  { icon: search_icon },
  { icon: heart_icon },
  { icon: shopping_icon },
];

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image src={logo} alt="logo" />
      </div>

      <div className={styles.navs_container}>
        <Navs />

        <ul className={styles.icon_navs}>
          {iconsNavs.map((icon, index) => {
            return (
              <li key={index}>
                <Image src={icon.icon} alt="icon" />
              </li>
            );
          })}
        </ul>
      </div>

      <div className={styles.icon_menu}>
        <Image src={menu} alt="icon menu" />
      </div>
    </header>
  );
};

export default Header;
