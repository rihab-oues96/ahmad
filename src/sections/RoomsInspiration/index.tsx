"use client";
import Image from "next/image";
import React, { useState } from "react";
import styles from "./roomsInspiration.module.scss";
import room1 from "../../assets/images/room1.jpeg";
import room2 from "../../assets/images/room2.jpeg";
import right from "../../assets/icons/right.svg";

import { useKeenSlider } from "keen-slider/react";

const animation = {
  duration: 8000,
};

const RoomsInspiration = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    mode: "free",
    slides: {
      perView: 1,
      spacing: 20,
    },

    created(slide) {
      setLoaded(true);
      slide.moveToIdx(1, true, animation);
    },

    animationEnded(slide) {
      slide.moveToIdx(slide.track.details.abs + 1, true, animation);
    },

    slideChanged(slide) {
      setCurrentSlide(slide.track.details.rel);
    },
  });

  return (
    <section className={styles.rooms_inspiration}>
      <div className={styles.rooms_inspiration_left}>
        <p className={styles.rooms_inspiration_title}>
          50+ Beautiful rooms <br />
          inspiration
        </p>

        <p className={styles.rooms_inspiration_description}>
          Our designer already made a lot of beautiful <br /> prototipe of rooms
          that inspire you
        </p>

        <div className={styles.btn_explore_more}>
          <p>Explore More</p>
        </div>
      </div>
      <div className={styles.rooms_inspiration_right}>
        <div className={styles.current_image}>
          <div className={styles.current_image_info}>
            <span>01 --- Bed Room</span>
            <p> Inner Peace</p>
            <div className={styles.next_image}>
              <Image src={right} alt="icon right" />
            </div>
          </div>
          <Image src={room1} alt="room inspiration" />
        </div>

        <div className={styles.slider_container}>
          <div className={`${styles.slider_cards} keen-slider`} ref={sliderRef}>
            <Image src={room2} alt="room" className="keen-slider__slide" />
            <Image src={room1} alt="room" className="keen-slider__slide" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoomsInspiration;
