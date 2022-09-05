import React, { useRef } from "react";
import classes from "./AddJoke.module.css";
const AddJoke = (props) => {
  const jokeDateRef = useRef("");
  const jokeTextRef = useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const joke = {
      date: jokeDateRef.current.value,
      jokeText: jokeTextRef.current.value,
    };
    props.onAddJoke(joke);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className={classes.control}>
        <label htmlFor="date">Date</label>
        <input type="text" id="date" ref={jokeDateRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="joke-text">Joke</label>
        <textarea rows="5" id="joke-text" ref={jokeTextRef}></textarea>
      </div>
      <button>Add a joke</button>
    </form>
  );
};

export default AddJoke;
