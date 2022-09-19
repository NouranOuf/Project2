import styles from "../styles/HomePage.module.css";
import Slider from "../components/Slider.js";
import Header from "../components/Header.js";
import { useState } from "react";
import NavBar from "../components/NavBar";

function HomePage(props) {
  const [sliderdata, setSliderData] = useState(props.name);
  const changeState = (e) => {
    setSliderData(e);
  };

  return (
      <div id={styles.section}>
        <NavBar name={props.name} onSubmit={changeState} />
        <Header />
        <div className={styles.slider}>
        <Slider  brand={sliderdata} />
        </div>
      </div>
  );
}

export default HomePage;
