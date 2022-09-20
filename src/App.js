import styles from "./App.module.css";
import HomePage from "./pages/HomePage.js";
import Course from "./pages/Course.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import CircleLoader from "react-spinkit";

function App() {
  let [isLoading, setLoading] = useState(true);
  let [items, setItems] = useState([]);
  const fetchData = async () => {
    await axios
      .get(`http://localhost:3000/db`)
      .then((res) => {
        setItems(res.data.courses);
        setTimeout(() => {
          setLoading(false);
        }, 3000);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    fetchData().then(() => {
      //setLoading(false);
    });
  }, []);
  if (isLoading) {
    return (
      <div className={styles.spinner}>
        <CircleLoader
          style={{ height: "100px", width: "100px" }}
          className={styles.loader}
          name="circle"
        />
      </div>
    );
  } else {
    return (
      <BrowserRouter>
        <div id={styles.app}>
          <Routes>
            <Route index element={<HomePage name={items} />} />
            <Route path="/HomePage" element={<HomePage name={items} />} />
            <Route path="/Course" element={<Course name={items} />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
