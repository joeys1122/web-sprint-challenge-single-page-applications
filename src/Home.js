import React from "react";
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();

  const routeToPizza = () => {
    history.push('/pizza');
  }

  return (
    <>
      <div>
        <div>
          <h1>Your favorite food, delivered while coding</h1>
          <button onClick={routeToPizza}>Pizza?</button>
        </div>
      </div>
    </>
  )
}

export default Home;