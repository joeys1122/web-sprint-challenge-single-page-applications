import React from "react";
// import { Link, useRouteMatch } from "react-router-dom";

const Form = props => {
  const {
    change,
    submit,
    values,
    errors
  } = props

  const onSubmit = event => {
    event.preventDefault();
    submit();
  }

  const onChange = event => {
    const { name, value, checked, type } = event.target;
    const valueToUse = type === 'checkbox' ? checked : value;
    change(name, valueToUse);
  }
  
  return (
    <div>
      <h1>Build Your Own Pizza</h1>

      <form onSubmit={onSubmit}>
        <div>
          <h2>Enter your Name</h2>
          <p>Required</p>
          <input 
            type='text'
            name='name'
            value={values.name}
            onChange={onChange}
          />
        </div>

        <div>
          <h2>Choice of Size</h2>
          <p>Required</p>
          <select 
            name='size'
            value={values.size}
            onChange={onChange}
          >

            <option value=''>Select</option>
            <option value='small'>Small</option>
            <option value='medium'>Medium</option>
            <option value='large'>Large</option>
          </select>
        </div>

        <div>
          <h2>Add Toppings</h2>
          <p>Choose up to 4</p>
          <label>Extra Cheese
            <input 
              type='checkbox'
              name='topping1'
              checked={values.topping1}
              onChange={onChange}
            />
          </label>
          <label>Pepperoni
            <input 
              type='checkbox'
              name='topping2'
              checked={values.topping2}
              onChange={onChange}
            />
          </label>
          <label>Sausage
            <input 
              type='checkbox'
              name='topping3'
              checked={values.topping3}
              onChange={onChange}
            />
          </label>
          <label>Bacon
            <input 
              type='checkbox'
              name='topping4'
              checked={values.topping4}
              onChange={onChange}
            />
          </label>
        </div>

        <div>
          <h2>Special Instructions</h2>
          <input 
            type='text'
            name='special'
            value={values.special}
            onChange={onChange}
          />
        </div>

        <button>Add to Order</button>
      </form>
    </div>
  )
}

export default Form;