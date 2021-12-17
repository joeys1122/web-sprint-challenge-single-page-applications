import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import Home from "./Home";
import Form from "./Form";

const App = () => {
  return (
    <>
      <header>
        <h1>Lambda Eats</h1>

        <nav>
          <Link to='/'><button>Home</button></Link>
          <button>Help</button>
        </nav>
      </header>

      <Switch>
        <Route path='/pizza'>
          <Form />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </>
  );
};
export default App;
