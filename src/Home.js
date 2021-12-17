import React from "react";
import { useHistory } from "react-router-dom";

const Home = props => {
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
        
        <div>
          <h2>Food Delivery in Gotham City</h2>

          <div>
            <h3>McDonald's</h3>
            <p>$ - American - Fast Food - Burgers</p>
            <span>20-30 Min</span>
            <span>$5.99 Delivery Fee</span>
          </div>

          <div>
            <h3>sweetgreen</h3>
            <p>$ - Healthy - Salads</p>
            <span>30-45 Min</span>
            <span>$4.99 Delivery Fee</span>
          </div>

          <div>
            <h3>Starbucks</h3>
            <p>$ - Cafe - Coffee & Tee - Breakfast and Brunch</p>
            <span>10-20 Min</span>
            <span>$3.99 Delivery Fee</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;