import React, { useState } from "react";
import styles from "../styles/navbar.module.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GrLanguage } from "react-icons/gr";
import { Link, useSearchParams, useNavigate } from "react-router-dom";

function NavBar(props) {
  let arr = [];
  let check = false;
  const courses = props.name;
  const [search, setSearch] = useSearchParams();
  let term = search.get("title") || "";

  const handleTitle = (event) => {
    const title = event.target.value;
    console.log(term);
    if (title) {
      setSearch({ title });
    } else {
      setSearch({});
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    courses
      .filter((courses) =>
        courses.title.toLowerCase().includes(term.toLowerCase())
      )
      .map((el) => {
        console.log(el);
        arr.push(el);
      });
    props.onSubmit(arr);
  };

  return (
    <div id={styles.nav}>
      <div id={styles.logo}>
        <img
          src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"
          alt="udemy"
        />
      </div>
      <ul className={styles.lists}>
        <Link  to="/HomePage">
          <li style={{color:"black"}}>HomePage</li>
        </Link>
        <li>Categories</li>
        <li id={styles.formholder}>
          <form id={styles.searchbar} onSubmit={handleSubmit}>
            <input
              id={styles.button}
              type="submit"
              value="Search"
              onClick={() => {
                check = true;
              }}
            />
            <input
              type="search"
              id={styles.input}
              placeholder="   Search for anything"
              value={search.get("title")}
              onChange={handleTitle}
            />
          </form>
        </li>
        <li >Udemy Business</li>
        <li>Teach on Udemy</li>
        <AiOutlineShoppingCart className={styles.items} id={styles.cart} />
        <li  id={styles.login}>
          Log in
        </li>
        <li id={styles.sign}>
          Sign Up
        </li>
        <GrLanguage id={styles.Language} />
      </ul>
    </div>
  );
}

export default NavBar;
