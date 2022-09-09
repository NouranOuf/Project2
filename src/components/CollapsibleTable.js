import React, { useState } from "react";
import styles from "../styles/collapse.module.css";

function CollapsibleTable(props) {
  const [open, setopen] = useState(false);
  return (
    <div className={styles.cont}>
      {
        <>
          <button className={styles.collapsible} onClick={() => setopen(!open)}>
            {props.name.subtitle}
          </button>
          <div className={open ? styles.contentps : styles.contentp}>
            <div className={styles.content}>
              {props.name.topic.map((el) => {
                return <a key={el}>{el}</a>;
              })}
            </div>
          </div>
        </>
      }
    </div>
  );
}

export default CollapsibleTable;
