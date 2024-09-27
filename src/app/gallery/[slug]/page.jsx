import React from "react";
import styles from "./GalleryCardDetails.module.css";
import Image from "next/image";

function GalleryCardDetails() {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/noavatar.png" alt="" fill className={styles.img} />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Image
            src="/noavatar.png"
            alt=""
            width={50}
            height={50}
            className={styles.avatar}
          />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Avani Sind</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published At</span>
            <span className={styles.detailValue}>01.01.2024</span>
          </div>
        </div>
        <div className={styles.content}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          deleniti quos magni ducimus consectetur deserunt aliquid qui commodi,
          maiores, rem sint laborum, id illum sunt nostrum placeat ratione ipsum
          rerum amet explicabo et optio porro! Vitae facilis iusto non, dolorem
          illum quos placeat repellat nesciunt tenetur pariatur. Nam maxime eius
          sapiente accusantium, excepturi eveniet magnam, itaque quis suscipit
          sed ratione ut enim et vel soluta temporibus. Est culpa quasi porro
          accusamus ex, sequi quaerat nostrum deserunt, animi nemo minus
          excepturi. Architecto repudiandae ullam modi? Nemo delectus dolores
          deserunt consequatur eos sed aut? Ab consectetur commodi placeat optio
          non dolor nesciunt?
        </div>
      </div>
    </div>
  );
}

export default GalleryCardDetails;
