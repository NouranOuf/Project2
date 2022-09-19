import styles from "../styles/section.module.css";
import React from "react";
import Rating from "@mui/material/Rating";
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import LanguageIcon from '@mui/icons-material/Language';

function Section(props) {
  return (
    <div className={styles.cont}>
      <div className={styles.sub}>
        <h1 className={styles.text}>{props.name[0].title}</h1>
        <h3 className={styles.text}>{props.name[0].description}</h3>
        <ul className={styles.info}>
        <li  className={styles.g1} style={{color: "rgb(250, 235, 100)"}}>
          {props.name[0].rating} 
            {" "}
            <Rating name="read-only" value={props.name[0].rating}  readOnly />
            <a style={{color:"rgb(222, 164, 245)"} }>{props.name[0].ratingnumber}</a>
            <a style={{color:"white"}}>{props.name[0].students}</a>
          </li>
          <li className={styles.g2}>
          Created by
          {props.name[0].instructor.map((el, i) => {
            return <a style={{color:"rgb(222, 164, 245)"} } size={20} key={i}>{el.name} </a>;
          })}
          </li>
          <li className={styles.g3}>
            <NewReleasesIcon/>{"  "}{props.name[0].lastupdate}{" "}<LanguageIcon/>{" "}{props.name[0].language}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Section;
