import React from "react";
import GalleryCard from "@/components/gallery/GalleryCard";
import styles from "./gallery.module.css";
import { getPosts } from "@/lib/data";

export const metadata = {
  title: "Gallery Page",
  description: "Gallery description",
};

const getData = async () => {
  const res = await getPosts();
  return res;
};

async function Gallery() {
  const blogs = await getData();
  return (
    <div className={styles.container}>
      {(blogs ?? []).map((item) => {
        return (
          <div className={styles.galleryCard} key={item._id}>
            <GalleryCard item={item} />
          </div>
        );
      })}
    </div>
  );
}

export default Gallery;
