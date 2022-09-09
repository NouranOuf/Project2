import React, { useState } from "react";
import styles from "../styles/instructors.module.css";
import StarIcon from "@mui/icons-material/Star";
import RocketIcon from "@mui/icons-material/Rocket";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";

function Instructor(props) {
  const [showMore, setShowMore] = useState(false);
  let instructors = props.name[0].instructor;
  return (
    <div id={styles.sub}>
      <h2>Instructors</h2>
      {instructors.map((el, i) => {
        return (
          <>
            <a className={styles.name}>{el.name}</a>
            <p className={styles.role}>{el.role}</p>
            <div id={styles.cont} key={i}>
              <div className={styles.imgcont}>
                <img
                  className={styles.img}
                  style={{ backgroundImage: `url(${el.img})` }}
                ></img>
              </div>
              <div className={styles.idata}>
                <div>
                  {" "}
                  <StarIcon className={styles.icon} /> {el.rating}
                </div>
                <div>
                  {" "}
                  <RocketIcon className={styles.icon} /> {el.review}
                </div>
                <div>
                  {" "}
                  <PeopleAltIcon className={styles.icon} /> {el.Students}
                </div>
                <div>
                  {" "}
                  <PlayCircleFilledWhiteIcon className={styles.icon} />
                  {el.courses}
                </div>
              </div>
            </div>
            <div className={styles.bio}>
              <p className={styles.text}>
                {showMore
                  ? el.personalinfo
                  : `${el.personalinfo.substring(0, 300)}`}
                <button
                  className={styles.btn}
                  onClick={() => setShowMore(!showMore)}
                >
                  {showMore ? "Show less " : "Show more "}
                </button>
              </p>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default Instructor;
