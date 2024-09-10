import Image from "next/image";
import styles from "./about.module.css";

export const metadata = {
  title: "About Page",
  description: "About description",
};

const AboutPage = () => {
  // console.log("lets check where it works")
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>About Us</h2>
        <h1 className={styles.title}>
          We craft stunning mandap decorations that are grander, more elegant,
          vibrant, and culturally rich.
        </h1>
        <p className={styles.desc}>
          We believe in blending tradition with modern creativity to design
          mandap setups that are not only visually captivating but also
          spiritually significant. With our skilled team of decorators, we bring
          your dream wedding vision to life by offering bespoke themes and
          meticulous attention to detail. From intricate floral arrangements to
          custom lighting designs, we cover every aspect to ensure your special
          day stands out.
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>5+</h1>
            <p>Years of experience</p>
          </div>
          <div className={styles.box}>
            <h1>1000+</h1>
            <p>Happy Clients</p>
          </div>
          <div className={styles.box}>
            <h1>10+</h1>
            <p>Unique Themes Offered</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/about.png" alt="About Image" fill className={styles.img} />
      </div>
    </div>
  );
};

export default AboutPage;
