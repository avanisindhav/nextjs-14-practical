import React from "react";
import styles from "./galleryCard.module.css";
import Image from "next/image";
import Link from "next/link";

export default function galleryCard({ item }) {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imageContainer}>
          {item.img && (
            <Image
              src={item.img}
              fill
              alt="Gallery Image card"
              className={styles.img}
            />
          )}
        </div>
        <span className={styles.date}>01.01.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>{item.title}</h1>
        <p className={styles.desc}>{item.desc}</p>
        <Link className={styles.link} href={`gallery/${item.slug}`}>
          READ MORE
        </Link>
      </div>
    </div>
  );
}
