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
        <NavBar className={styles.navbar}name={props.name} onSubmit={changeState} />
        <Header />
        <Slider brand={sliderdata} />
      </div>
  );
}

export default HomePage;
