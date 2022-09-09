import React, { useState, useEffect } from "react";
import CollapsibleTable from "../components/CollapsibleTable";
import FeedBack from "../components/FeedBack";
import FloatSection from "../components/FloatSection";
import Footer from "../components/Footer";
import Instructor from "../components/Instructor";
import NavBar from "../components/NavBar";
import Requirements from "../components/Requirements";
import Reviews from "../components/Reviews";
import Section from "../components/Section";
import SectionTwo from "../components/SectionTwo";
import styles from "../styles/course.module.css";

function Course(props) {
  const [show, setshow] = useState(false);

  let button = false;
  const arr = [];
  const arr2 = [];

  let items = props.name;
  {
    items[0].topics.map((el, i) => {
      if (i < 4) {
        arr.push(<CollapsibleTable name={el} />);
      } else {
        button = true;
        arr2.push(<CollapsibleTable name={el} />);
      }
    });
  }
  return (
    <div id={styles.sec}>
      <NavBar name={items} />
      <Section name={items} />

      <div id={styles.body}>
        <SectionTwo name={items} />

        <div id={styles.collapsepart}>
          <h2 id={styles.title}>Course Content</h2>
          <div>{arr}</div>
          <div id={show ? styles.contentps : styles.contentp}>
            <div id={styles.content}>{arr2}</div>
          </div>
          {button && (
            <button id={styles.showmore} onClick={() => setshow(!show)}>
              {show ? "show less" : "show more"}
            </button>
          )}
        </div>

        <Requirements name={items} />
        <Instructor name={items} />
        <FeedBack name={items} />
        <Reviews name={items} />
      </div>
      <Footer />
      <FloatSection id={styles.float} name={items} />
    </div>
  );
}

export default Course;
