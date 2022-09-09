import React, { useState } from "react";
import styles from "../styles/Require.module.css";

function Requirements(props) {
  const [showMore, setShowMore] = useState(false);

  let require = props.name[0].requirements;
  let Description = props.name[0].details;

  return (
    <div id={styles.cont}>
      <h2>Requirements</h2>
      <ul>
        {require.map((el, i) => {
          return (
            <li className={styles.lists} key={i}>
              {" "}
              {el}{" "}
            </li>
          );
        })}
      </ul>
      <div id={styles.d}>
        <h2>Description</h2>
        <p id={styles.text}>
          {showMore ? Description : `${Description.substring(0, 725)}`}
          <button className={styles.btn} onClick={() => setShowMore(!showMore)}>
            {showMore ? "Show less " : "Show more "}
          </button>
        </p>
      </div>
    </div>
  );
}

export default Requirements;
