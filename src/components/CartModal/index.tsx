"use client";

import React from "react";
import styles from "./cartModal.module.scss";
import closeIcon from "../../assets/icons/closed.svg";
import Image from "next/image";

type cartModalType = {
  toggleCartModal: Function;
};

const CartModal = ({ toggleCartModal }: cartModalType) => {
  return (
    <div className={styles.cartModal} onClick={() => toggleCartModal()}>
      <div className={styles.cartModalContent}>
        <div className={styles.cartModalContent_top}>
          <div className={styles.header}>
            <p>Shopping Cart</p>
            <Image src={closeIcon} alt="close icon" />
          </div>

          <div className={styles.line}></div>
        </div>

        <div className={styles.cartModalContent_bottom}>
          <div></div>

          <div className={styles.cart_modal_btns}>
            <div className={styles.cart_modal_btn}>Cart</div>
            <div className={styles.cart_modal_btn}>Checkout</div>
            <div className={styles.cart_modal_btn}>Comparaison</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
