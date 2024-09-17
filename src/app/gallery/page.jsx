import React from "react";
import GalleryCard from "@/components/gallery/GalleryCard";
import styles from "./gallery.module.css";

function Gallery() {
  return (
    <div className={styles.container}>
      {[1, 2, 3, 4].map((item) => {
        return (
          <div className={styles.galleryCard} key={item}>
            <GalleryCard />
          </div>
        );
      })}
    </div>
  );
}

export default Gallery;
