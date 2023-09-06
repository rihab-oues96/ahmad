import Image from "next/image";
import React from "react";
import styles from "./pageCover.module.scss";
import logo from "../../assets/icons/logo.svg";

type PageCovertype = {
  pageName: string;
};

const PageCover = ({ pageName }: PageCovertype) => {
  return (
    <section className={styles.page_cover}>
      <div className={styles.page_cover_content}>
        <Image src={logo} alt="logo" />
        <p className={styles.page_cover_title}>{pageName}</p>
        <p className={styles.Page_cover_subtitle}>
          Home {`>`}
          <span className={styles.Page_cover_subtitle_pagename}>
            {pageName}
          </span>
        </p>
      </div>
    </section>
  );
};

export default PageCover;
