import React from "react";
// import { Link, useRouteMatch } from "react-router-dom";

const Form = props => {
  const {
    change,
    submit,
    values,
    errors,
    disabled
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
    <div className='pizza-build'>
      <h1>Build Your Own Pizza</h1>

      <form id='pizza-form' onSubmit={onSubmit}>
        <div className='pizza-input'>
          <div>
            <h2>Enter your Name</h2>
            <p>Required</p>
          </div>
          <input 
            type='text'
            name='name'
            value={values.name}
            onChange={onChange}
            id='name-input'
          />
        </div>

        <div className='pizza-input'>
          <div>
            <h2>Choice of Size</h2>
            <p>Required</p>
          </div>
          <select 
            name='size'
            value={values.size}
            onChange={onChange}
            id='size-dropdown'
          >

            <option value=''>Select</option>
            <option value='small'>Small</option>
            <option value='medium'>Medium</option>
            <option value='large'>Large</option>
          </select>
        </div>

        <div className='pizza-input'>
          <div>
            <h2>Add Toppings</h2>
            <p>Choose up to 4</p>
          </div>
          <section id='pizza-checkbox'>
            <label>
              <input 
                type='checkbox'
                name='topping1'
                checked={values.topping1}
                onChange={onChange}
              />
              Extra Cheese
            </label>
            <label>
              <input 
                type='checkbox'
                name='topping2'
                checked={values.topping2}
                onChange={onChange}
              />
              Pepperoni
            </label>
            <label>
              <input 
                type='checkbox'
                name='topping3'
                checked={values.topping3}
                onChange={onChange}
              />
              Sausage
            </label>
            <label>
              <input 
                type='checkbox'
                name='topping4'
                checked={values.topping4}
                onChange={onChange}
              />
              Bacon
            </label>
          </section>
        </div>

        <div className='pizza-input'>
          <div>
            <h2>Special Instructions</h2>
            <p>Anything else you'd like to add?</p>
          </div>
          
          <input 
            type='text'
            name='special'
            value={values.special}
            onChange={onChange}
            id='special-text'
          />
        </div>

        <div className='errors'>
          <div>{errors.name}</div>
          <div>{errors.size}</div>
        </div>

        <button id='order-button' disabled={disabled}>Add to Order</button>
      </form>
    </div>
  )
}

export default Form;