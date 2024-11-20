import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm <span className={styles.name}>Arthur</span></h1>
        <p className={styles.description}>
        I'm in my final year of Computer Science, specializing in Data Analytics, with a passion for building practical digital solutions. I have experience creating user-friendly web applications using tools like React, PHP, and CSS, and I enjoy diving into data with Python, SQL, and machine learning to uncover insights. I’m always excited about opportunities to combine my technical skills and creativity to solve real-world challenges.
        </p>
        <a href="mailto:myemail@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/pfp.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
