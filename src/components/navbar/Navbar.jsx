import React from "react";
import Links from "./links/Links";
import styles from "./navbar.module.css";
import Link from "next/link";

function Navbar() {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        Shiv Decoration
      </Link>
      <div>
        <Links />
      </div>
    </div>
  );
}

export default Navbar;
