import React from "react";
import styles from "../styles/header.module.css";

function Header() {
  return (
    <div id={styles.cont}>
      <img
        id={styles.small}
        src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fb3c6e4c0-fd21-41bb-ab90-d5e5c96258dc%2FUntitled.png?table=block&id=f6854783-e48a-49ca-b5fa-7c9cb821f2dc&spaceId=bce2fe01-1bb0-422d-a8af-5209f93d38fe&width=850&userId=08abbfdf-01bd-4100-9716-5b884590bacf&cache=v2"
      />
      <img
        id={styles.img}
        src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fb155d37f-1317-4eeb-b59a-527936b73fc9%2FUntitled.png?table=block&id=5fe124b4-7307-428f-a878-16da7eed656d&spaceId=bce2fe01-1bb0-422d-a8af-5209f93d38fe&width=2000&userId=08abbfdf-01bd-4100-9716-5b884590bacf&cache=v2"
      />
      <div id={styles.textarea}>
        <h2 id={styles.txt1}>learning that gits you</h2>
        <h4 id={styles.txt2}>
          skills for your present(and your future) get started with us
        </h4>
      </div>
    </div>
  );
}

export default Header;
