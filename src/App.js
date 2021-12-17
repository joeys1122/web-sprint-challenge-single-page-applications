import React, { useState, useEffect } from "react";
import { Route, Link, Switch } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Form from "./Form";
import formSchema from "./formSchema";
import * as yup from 'yup';

const initialFormValues = {
  name: '',
  size: '',
  topping1: false,
  topping2: false,
  topping3: false,
  topping4: false,
  special: ''
}

const initialFormErrors = {
  name: '',
  size: '',
  topping1: false,
  topping2: false,
  topping3: false,
  topping4: false,
  special: ''
}

const App = () => {
  const [ formValues, setFormValues ] = useState(initialFormValues);
  const [ formErrors, setFormErrors ] = useState(initialFormErrors);
  const [ disabled, setDisabled ] = useState(true);

  const postNewPizza = newPizza => {
    console.log(newPizza);
  }

  const validate = (name, value) => {
    yup.reach(formSchema, name)
      .validate(value)
      .then(() => setFormErrors({ ...initialFormErrors, [name]: ''}))
      .catch(error => setFormErrors({ ...initialFormErrors, [name]: error.errors[0]}))
  }

  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({ ...formValues, [name]: value });
  }

  const formSubmit = () => {
    const newPizza = {
      name: formValues.name.trim(),
      size: formValues.size,
      topping1: !!formValues.topping1,
      topping2: !!formValues.topping2,
      topping3: !!formValues.topping3,
      topping4: !!formValues.topping4,
      special: formValues.special.trim()
    }

    postNewPizza(newPizza);
  }

  // useEffect(() => {
  //   formSchema.isValid(formValues).then(valid => setDisabled(!valid))
  // }, [formErrors])

  return (
    <div className="App">
      <header>
        <h1>Lambda Eats</h1>

        <nav>
          <Link to='/'><button>Home</button></Link>
          <button>Help</button>
        </nav>
      </header>

      <Switch>
        <Route path='/pizza'>
          <Form 
            change={inputChange} 
            submit={formSubmit} 
            values={formValues} 
            errors={formErrors} 
            disabled={disabled} 
          />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </div>
  );
};
export default App;
