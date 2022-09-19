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
        arr.push(<CollapsibleTable name={el} key={i}/>);
      } else {
        button = true;
        arr2.push(<CollapsibleTable name={el} key={i} />);
      }
    });
  }
  return (
    <div className={styles.sec}>
      <NavBar name={items} />
      <Section name={items} className={styles.left}/>

      <div className={styles.body}>
        <SectionTwo name={items} className={styles.left}/>

        <div className={styles.collapsepart}>
          <h2 className={styles.title}>Course Content</h2>
          <h5 className={styles.summ}>{items[0].summary}</h5>
          <div>{arr}</div>
          <div className={show ? styles.contentps : styles.contentp}>
            <div className={styles.content}>{arr2}</div>
          </div>
          {button && (
            <button className={styles.showmore} onClick={() => setshow(!show)}>
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
      <FloatSection className={styles.float} name={items} />
    </div>
  );
}

export default Course;
