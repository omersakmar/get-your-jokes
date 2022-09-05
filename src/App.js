import React, { useState, useEffect, useCallback, Fragment } from "react";

import "./App.css";
import AddJoke from "./components/AddJoke";
import JokesList from "./components/JokesList";

function App() {
  const [jokes, setJokes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFetchJokes = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://add-a-new-joke-firebase-default-rtdb.europe-west1.firebasedatabase.app/jokes.json"
      );
      if (!response.ok) {
        throw new Error("Something is wrong");
      }
      const data = await response.json();
      const loadedJokes = [];
      for (const key in data) {
        loadedJokes.push({
          id: key,
          date: data[key].date,
          jokeText: data[key].jokeText,
        });
      }
      setJokes(loadedJokes);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    handleFetchJokes();
  }, [handleFetchJokes]);

  const handleAddJokes = async (joke) => {
    const response = await fetch(
      "https://add-a-new-joke-firebase-default-rtdb.europe-west1.firebasedatabase.app/jokes.json",
      {
        method: "POST",
        body: JSON.stringify(joke),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
  };

  let content;

  if (jokes.length > 0) {
    content = <JokesList jokes={jokes} />;
  } else if (error) {
    content = <p>{error}</p>;
  } else if (isLoading) {
    content = <p>Loading the jokes...</p>;
  } else {
    content = <p>No jokes for you.</p>;
  }
  return (
    <Fragment>
      <section>
        <AddJoke onAddJoke={handleAddJokes} />
      </section>
      <section>
        <button onClick={handleFetchJokes}>See the jokes</button>
      </section>
      <section>{content}</section>
    </Fragment>
  );
}

export default App;
