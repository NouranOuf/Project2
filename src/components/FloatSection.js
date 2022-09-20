import React from 'react';
import styles from  '../styles/float.module.css';

function FloatSection(props) {

    let course = props.name[0];
    return (
        <div className={styles.cont}>
            <div className={styles.courseimg}>
            <img  className={styles.img}style={{backgroundImage: `url(${course.img})`}}></img>
            </div>
            <h1>{course.price}</h1>
            <button id={styles.button1}>add to cart</button>
            <button id ={styles.button2}>buy now</button>
            <p>30-Day Money-Back Guarantee</p>
            {/* <p>this course includes:</p>
            <div><a>Share</a></div> */}
        </div>
    );
}

export default FloatSection;