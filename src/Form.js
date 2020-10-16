import React from 'react';


export default function Form (props) {
const { values, update, submit, change, disabled, errors } = props;

const onChange = (evt) => {
  const { name, value, type, checked } = evt.target;
  const valueToUse = type === 'checkbox' ? checked : value;
  change(name, valueToUse);
}

const onSubmit = (evt) => {
  evt.preventDefault();
  submit();
}


  return (
<form className='form-container' onSubmit={onSubmit}>
<div className='form-image'></div>
<h3>Build Your Own Pizza</h3>
<label>
  Name
  <input 
  value={values.name}
  onChange={onChange}
  name='name'
  type='text'
  />
</label>
<label>
  Choice of Size
  <select name='size' value={values.size} onChange={onChange}>
    <option value=''>Select</option>
    <option value='Large'>Large</option>
    <option value='medium'>Medium</option>
    <option value='small'>Small</option>
  </select>
</label>
{/* //////////// RADIO BUTTONS /////////////// */ }
{/* //////////// RADIO BUTTONS /////////////// */ }
{/* //////////// RADIO BUTTONS /////////////// */ }
{/* //////////// RADIO BUTTONS /////////////// */ }
<div>
  <h3>Choice of Sauce</h3>
  <h4>Required</h4>
</div>
<label>
  Red Sauce
<input
  type='radio'
  name='sauce'
  value='red'
  checked={values.sauce === 'red'}
  onChange={onChange}
  />
</label>

<label>
  Garlic Ranch
<input
  type='radio'
  name='sauce'
  value='garlicRanch'
  checked={values.sauce === 'garlicRanch'}
  onChange={onChange}
  />
</label>
<label>
  BBQ Sauce
<input
  type='radio'
  name='sauce'
  value='bbq'
  checked={values.sauce === 'bbq'}
  onChange={onChange}
  />
</label>
<label>
  Spinach Alfredo
<input
  type='radio'
  name='sauce'
  value='spinAlfredo'
  checked={values.sauce === 'spinAlfredo'}
  onChange={onChange}
  />
</label>
{/* ////////////// TOPPINGS ///////////////// */}
{/* ////////////// TOPPINGS ///////////////// */}
{/* ////////////// TOPPINGS ///////////////// */}
{/* ////////////// TOPPINGS ///////////////// */}
<div>
<h3>Add Toppings</h3>
  <h4>Required</h4>
</div>
<div className='checkbox-group'>
  <label>
    Pepperoni
    <input
    type="checkbox"
    name="pepperoni"
    checked={values.pepperoni}
    onChange={onChange}
    />
  </label>
  <label>
    Sausage
    <input
    type="checkbox"
    name="sausage"
    checked={values.sausage}
    onChange={onChange}
    />
  </label>
  <label>
    Onions
    <input
    type="checkbox"
    name="onions"
    checked={values.onions}
    onChange={onChange}
    />
  </label>
  <label>
    Peppers
    <input
    type="checkbox"
    name="peppers"
    checked={values.peppers}
    onChange={onChange}
    />
  </label>
  <label>
    Pineapple
    <input
    type="checkbox"
    name="pineapple"
    checked={values.pineapple}
    onChange={onChange}
    />
  </label>
  <label>
    Chicken
    <input
    type="checkbox"
    name="chicken"
    checked={values.chicken}
    onChange={onChange}
    />
  </label>
</div>
{/* ////////////// SUB ///////////////// */}
{/* ////////////// SUB ///////////////// */}
{/* ////////////// SUB ///////////////// */}
{/* ////////////// SUB ///////////////// */}
<div>
  <h3>Choice of Substitute</h3>
  <h4>Choose up to 1</h4>
  <label>
   Gluten Free Crust + $1.00
   <input 
    type='checkbox'
    name='glutenFree'
    checked={values.glutenFree}
    onChange={onChange}
    />
  </label>
{/* ////////////// TEXT FORM ///////////////// */}
{/* ////////////// TEXT FORM ///////////////// */}
{/* ////////////// TEXT FORM ///////////////// */}
{/* ////////////// TEXT FORM ///////////////// */}
<div>
  <h3>Special Instructions</h3>
</div>
<label>
  Instructions
  <input  
    value={values.instructions}
    onChange={onChange}
    name='instructions'
    type='text'
  />
</label>

<button
// disabled={disabled}
>Add to Order</button>

</div>








</form>
  )
}