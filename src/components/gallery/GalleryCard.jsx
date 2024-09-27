import React from "react";
import styles from "./galleryCard.module.css";
import Image from "next/image";
import Link from "next/link";

export default function galleryCard() {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imageContainer}>
          <Image
            src="/noavatar.png"
            fill
            alt="Gallery Image card"
            className={styles.img}
          />
        </div>
        <span className={styles.date}>01.01.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.desc}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam
          expedita ratione odit obcaecati delectus ipsa maiores natus officia
          excepturi, amet quae magnam aliquid consequuntur vel, dolore cum.
          Voluptas itaque tempore animi laudantium, eos accusantium cumque
          facilis, eius corporis, odio id quia ad. Ipsum possimus aliquid quis
          ipsa? Perferendis, aspernatur dicta?
        </p>
        <Link className={styles.link} href="/gallery/post">
          READ MORE
        </Link>
      </div>
    </div>
  );
}
