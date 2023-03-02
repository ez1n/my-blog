import React from "react";
import styles from "./Hero.module.css";
import Image from "next/image";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.image}>
        <Image
          src='/images/site/yejin.jpg'
          alt='An image showing Yejin'
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Yejin Jeon</h1>
      <p>
        I blog about web development - especially frontend frameworks like
        React.
      </p>
    </section>
  );
}
