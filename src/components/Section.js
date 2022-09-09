import styles from "../styles/section.module.css";
import React from "react";
import Rating from "@mui/material/Rating";
function Section(props) {
  return (
    <div id={styles.cont}>
      <div id={styles.sub}>
        <h1 className={styles.text}>{props.name[0].title}</h1>
        <h3 className={styles.text}>{props.name[0].description}</h3>
        <ul>
          {props.name[0].instructor.map((el, i) => {
            return <li key={i}>{el.name}</li>;
          })}
          <li>
            {props.name[0].rating}{" "}
            <Rating name="read-only" value={props.name[0].rating} readOnly />
          </li>
          <li>{props.name[0].price}</li>
        </ul>
      </div>
    </div>
  );
}

export default Section;
