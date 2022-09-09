import React from "react";
import styles from "../styles/review.module.css";
import Rating from "@mui/material/Rating";
import Avatar from "@mui/material/Avatar";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";

function Reviews(props) {
  let rev = props.name[0].feedback;

  return (
    <div className={styles.cont}>
      <h2>Reviews</h2>
      <div>
        <form id={styles.searchbar}>
          <input
            type="search"
            id={styles.input}
            placeholder="   Search reviews"
          />
          <input id={styles.button} type="submit" value="Search" />
        </form>
      </div>
      <div className={styles.rev}>
        {rev.map((el) => {
          return (
            <div className={styles.comment}>
              <div>
                {" "}
                <Avatar sx={{ bgcolor: "black" }}>{el.name[0]}</Avatar>
              </div>
              <div className={styles.info}>
                <p sx={{ bgcolor: "black" }}> {el.name}</p>
                <div>
                  {" "}
                  <Rating name="read-only" value={el.rating} readOnly />
                </div>
                <p>Was this review helpful?</p>
                <p>{el.comment}</p>
                <div className={styles.thumps}>
                  <ThumbUpOffAltIcon />
                  <ThumbDownOffAltIcon />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Reviews;
