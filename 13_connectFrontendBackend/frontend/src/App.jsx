import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios
      .get("/api/v1/jokes")
      .then((res) => {
        setJokes(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <h1>Connecting frontend to backend</h1>
      <p>JOKES : {jokes.length}</p>

      {jokes &&
        jokes.map((joke) => {
          return (
            <div key={joke.id}>
              <h2>{joke.title}</h2>
              <p>{joke.content}</p>
            </div>
          );
        })}
    </>
  );
}

export default App;
