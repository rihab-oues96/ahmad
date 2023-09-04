import { navsList } from "@/data";
import Link from "next/link";
import styles from "./navs.module.scss";

const Navs = () => {
  return (
    <ul className={`${styles.navs}`}>
      {navsList.map((nav, index) => {
        return (
          <li key={index}>
            <Link href={nav.route!}>{nav.name}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Navs;
