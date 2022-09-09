import React from "react";
import styles from "../styles/sectiontwo.module.css";

function SectionTwo(props) {
  return (
    <div id={styles.cont}>
      <h2>what you will learn</h2>
      <ul id={styles.list}>
        {props.name[0].whatyoulearn.map((skill, i) => {
          return <li key={i}> {skill} </li>;
        })}
      </ul>
    </div>
  );
}

export default SectionTwo;
