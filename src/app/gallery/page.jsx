import React from "react";
import GalleryCard from "@/components/gallery/GalleryCard";
import styles from "./gallery.module.css";
import { getPosts } from "@/lib/data";

const getData = async () => {
  const res = await getPosts();
  console.log({ res });
  return res;
};

async function Gallery() {
  const blogs = await getData();
  return (
    <div className={styles.container}>
      {(blogs ?? []).map((item) => {
        return (
          <div className={styles.galleryCard} key={item.id}>
            <GalleryCard />
          </div>
        );
      })}
    </div>
  );
}

export default Gallery;
