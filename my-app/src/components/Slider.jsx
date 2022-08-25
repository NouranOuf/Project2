import React from "react"
import './Slider.css';
import { FaChevronCircleRight, FaChevronCircleLeft } from 'react-icons/fa';
import {AiFillStar } from 'react-icons/ai';

const Slider = (props)=>{
    const courses =
    [{
        image:"https://th.bing.com/th/id/OIP.5DKZ69pp5yAhB1KkwmzA3wHaEK?w=322&h=180&c=7&r=0&o=5&pid=1.7",
        title: 'Learn Python:The Complete Python Programming',
        instructor: 'jose portila',
        stars:4,
        students:1432,
        price: 39,
     
    },
    {
        image:"https://th.bing.com/th/id/OIP.XrsvwFSDIqxRlqd8OhDI5AHaEK?w=270&h=180&c=7&r=0&o=5&pid=1.7",
        title: 'Learning Python for Data Analysis and Visualization',
        instructor: 'jose portila',
        stars:4,
        students:1432,
        price: 39,
    }
    ,
    {
        image:"https://th.bing.com/th/id/OIP.XrsvwFSDIqxRlqd8OhDI5AHaEK?w=270&h=180&c=7&r=0&o=5&pid=1.7",
        title: 'Python for Beginners-Learn Programming from scratch Python',
        instructor: 'jose portila',
        stars:4,
        students:1432,
        price: 39,
   
    },
    {
        image:"https://th.bing.com/th/id/OIP.XrsvwFSDIqxRlqd8OhDI5AHaEK?w=270&h=180&c=7&r=0&o=5&pid=1.7",
        title: 'Python Beyond the Basics-Object-Oriented Programming',
        instructor: 'jose portila',
        stars:4,
        students:1432,
        price: 39,
   
    },
    {
        image:"https://th.bing.com/th/id/OIP.XrsvwFSDIqxRlqd8OhDI5AHaEK?w=270&h=180&c=7&r=0&o=5&pid=1.7",
        title: 'Learn Python: The Complete Python Programming',
        instructor: 'jose portila',
        stars:4,
        students:1432,
        price: 39,
   
    },
    {
        image:"https://th.bing.com/th/id/OIP.XrsvwFSDIqxRlqd8OhDI5AHaEK?w=270&h=180&c=7&r=0&o=5&pid=1.7",
        title: 'Learn Python: The Complete Python Programming',
        instructor: 'jose portila',
        stars:4,
        students:1432,
        price: 39,
   
    },
    {
        image:"https://th.bing.com/th/id/OIP.XrsvwFSDIqxRlqd8OhDI5AHaEK?w=270&h=180&c=7&r=0&o=5&pid=1.7",
        title: 'Learn Python: The Complete Python Programming',
        instructor: 'jose portila',
        stars:4,
        students:1432,
        price: 39,
   
    }
]
    const slideleft =()=>{
        const slid = document.getElementById('content');
        slid.scrollLeft = slid.scrollLeft - 500;
    }
    const slideright =()=>{
        const slid = document.getElementById('content');
        slid.scrollLeft = slid.scrollLeft + 500;
    }
    return (
        <div id="sub">
        <h2>Expand your career opportunities with Python</h2>
        <p>Take one of Udemy’s range of Python courses and learn how to code using this incredibly useful language. <br></br>
            Its simple syntax and readability makes Python perfect for Flask, Django, data science, and machine learning. <br></br>
            You’ll learn how to build everything from games to sites to apps. Choose from a range of courses that will 
            appeal to...</p>
        <div id="slider-cont">
          <FaChevronCircleLeft size={40} id="left" onClick={slideleft}/>
          <div id="content">
           {
            courses.map((courses , i)=>{
              return (
                <div className="card" key={i}>  
                 <img className ="img" style={{backgroundImage: `url(${courses.image})`}}></img>
                 <p className="title">{courses.title}</p>
                 <p className="inst">{courses.instructor}</p>
                 <AiFillStar className="s"></AiFillStar>
                 <AiFillStar className="s"></AiFillStar>
                 <AiFillStar className="s"></AiFillStar>
                 <AiFillStar className="s"></AiFillStar>
                 <AiFillStar className="s"></AiFillStar>
                 <p className="title">{courses.students}</p>
                 <p className="title">{courses.price}</p>
                </div>
              )
            })
           }
          </div>
          <FaChevronCircleRight size={40} id="right" onClick={slideright}/>
          </div>
        </div>
    )
    
}

export default Slider ;