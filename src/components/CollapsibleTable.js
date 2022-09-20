import React, { useState } from "react";
import styles from "../styles/collapse.module.css";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';

function CollapsibleTable(props) {
  const [open, setopen] = useState(false);
  return (
    <div className={styles.cont}>
          <button className={styles.collapsible} onClick={() => setopen(!open)}>
          <div className={styles.toggle}>
          {
            open ? <KeyboardArrowUpIcon/>:<KeyboardArrowDownIcon/>
          }
           {props.name.subtitle}
           </div>
           <div className={styles.details}>
           {props.name.lectures}
           {props.name.time}
           </div>
          </button>
          <div className={open ? styles.contentps : styles.contentp}>
            <div className={styles.content}>
              {props.name.topic.map((el) => {
                return <a key={el}><PlayCircleIcon/>{el}</a>;
              })}
            </div>
          </div>

    </div>
  );
}

export default CollapsibleTable;
