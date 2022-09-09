import React from "react";
import styles from "../styles/footer.module.css";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.first}>
        <p>
          Top companies choose {<span>Udemy Business</span>} to build in-demand
          career skills.
        </p>
        <div className={styles.imgs}>
          <img src="https://s.udemycdn.com/partner-logos/v4/nasdaq-light.svg"></img>
          <img src="https://s.udemycdn.com/partner-logos/v4/volkswagen-light.svg"></img>
          <img src="https://s.udemycdn.com/partner-logos/v4/box-light.svg"></img>
          <img src="https://s.udemycdn.com/partner-logos/v4/eventbrite-light.svg"></img>
        </div>
      </div>
      <div className={styles.second}>
        <div>
          <a>udemy business</a>
          <a>teach on udemy</a>
          <a>get the app</a>
          <a>about us</a>
        </div>
        <div>
          <a>contact us</a>
          <a></a>
          <a>careers</a>
          <a>Blog</a>
        </div>
        <div>
          <a>help and support</a>
          <a>investors</a>
          <a>terms</a>
          <a>privacy policy</a>
        </div>
      </div>
      <img
        src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg"
        className={styles.logo}
      ></img>
    </div>
  );
}

export default Footer;
