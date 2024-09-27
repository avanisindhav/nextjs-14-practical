import React, { Suspense } from "react";
import styles from "./GalleryCardDetails.module.css";
import Image from "next/image";
import { getPost } from "@/lib/data";
import CardUser from "@/components/CardUser/CardUser";

const getData = async (slug) => {
  const res = await getPost(slug);
  return res;
};

export const generateMetadata = async ({ params }) => {
  const { slug } = params;

  const post = await getPost(slug);

  return {
    title: post.title,
    description: post.desc,
  };
};

async function GalleryCardDetails({ params }) {
  const { slug } = params;
  const item = await getData(slug);
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        {item.img && (
          <Image src={item.img} alt="" fill className={styles.img} />
        )}
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{item.title}</h1>
        <div className={styles.detail}>
          {item && (
            <Suspense fallback={<div>Loading...</div>}>
              <CardUser userId={item.userId} />
            </Suspense>
          )}
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published At</span>
            <span className={styles.detailValue}>
              {item.createdAt?.toString().slice(4, 16)}
            </span>
          </div>
        </div>
        <div className={styles.content}>{item.desc}</div>
      </div>
    </div>
  );
}

export default GalleryCardDetails;
