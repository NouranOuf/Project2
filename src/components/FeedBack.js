import React from 'react';
import Rating from '@mui/material/Rating';
import styles from  '../styles/feedback.module.css';

function FeedBack(props) {
   let rating = props.name[0].rating;
    return (
        <div>
            <h2>Students FeedBack</h2>
            <div id={styles.cont}>
                <div id={styles.first}>
                   <div className={styles.rat}> {rating}</div>
                   <div> <Rating name="read-only" value={rating} readOnly /></div>
                    <div>Course Rating</div>
                </div>
                <div id={styles.second}> vertical histogram</div>
            </div>
        </div>
    );
}

export default FeedBack;