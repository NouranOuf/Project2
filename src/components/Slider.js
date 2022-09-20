import React from "react";
import styles from "../styles/Slider.module.css";
import { FaChevronCircleRight, FaChevronCircleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
const Slider = (props) => {
  return (
    <div id={styles.sub}>
      <h1 className={styles.coursestitle}>A broad selection of courses</h1>
      <p>Choose from 204,000 online video courses with new additions published every month</p>
      <div className={styles.section}>
      <h2>Expand your career opportunities with Python</h2>
      <p>
        Take one of Udemy’s range of Python courses and learn how to code using
        this incredibly useful language. <br></br>
        Its simple syntax and readability makes Python perfect for Flask,
        Django, data science, and machine learning. <br></br>
        You’ll learn how to build everything from games to sites to apps. Choose
        from a range of courses that will appeal to...
      </p>
      <div id={styles.slider}>
        <FaChevronCircleLeft size={40} id={styles.left} />
        {props.brand.length > 0 ? (
          <div id={styles.content}>
            {props.brand.map((courses, i) => {
              return (
                <div className={styles.card} key={i}>
                  <Link style={{color:"black"}}to="/Course">
                    <img
                      className={styles.img}
                      style={{ backgroundImage: `url(${courses.img})` }}
                    ></img>
                    <p className={styles.title}>{courses.title}</p>
                    {courses.instructor.map((el, i) => {
                      return <p className={styles.inst} key={i}>{el.name}</p>;
                    })}
                    <div>
                      {" "}
                      <Rating
                        name="read-only"
                        value={courses.rating}
                        readOnly
                      />
                    </div>
                    <p className={styles.title}>{courses.students}</p>
                    <p className={styles.title}>{courses.price}</p>
                  </Link>
                </div>
              );
            })}
          </div>
        ) : (
          <div></div>
        )}
        <FaChevronCircleRight size={40} id={styles.right} />
      </div>
    </div>
    </div>
  );
};

export default Slider;
