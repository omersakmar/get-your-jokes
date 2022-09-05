import React from "react";
import classes from "./Joke.module.css";
const Joke = (props) => {
  return (
    <li className={classes.joke}>
      <h2>{props.date}</h2>
      <p> {props.jokeText} </p>
    </li>
  );
};

export default Joke;
