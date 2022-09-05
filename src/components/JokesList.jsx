import React from "react";
import Joke from "./Joke";
import classes from "./JokesList.module.css";

const JokesList = (props) => {
  return (
    <ul className={classes["jokes-list"]}>
      {props.jokes.map((joke) => (
        <Joke key={joke.id} date={joke.date} jokeText={joke.jokeText} />
      ))}
    </ul>
  );
};

export default JokesList;
