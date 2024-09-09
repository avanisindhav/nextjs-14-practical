import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>shiv mandap service</div>
      <div className={styles.text}>
        Shiv mandap service © All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
