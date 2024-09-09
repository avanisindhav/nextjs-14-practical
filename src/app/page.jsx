import Image from "next/image";
import styles from "./home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Mandap Decoration Service.</h1>
        <p className={styles.desc}>
          Elevate your special day with elegant, custom Mandap decorations that
          create unforgettable moments.
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>Explore Our Designs</button>
          <button className={styles.button}>Contact</button>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/main.gif" alt="" fill className={styles.heroImg} />
      </div>
    </div>
  );
};

export default Home;
