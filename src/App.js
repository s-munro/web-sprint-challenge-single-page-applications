import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import * as yup from 'yup'
import axios from 'axios'
import Home from './Home';
import Form from './Form'
import schema from './formSchema'
// import Pizza from './Pizza'




const initialFormValues = {
  name: '',
  size: '',
  sauce: 'red',
  pepperoni: false,
  sausage: false,
  onions: false,
  peppers: false,
  pineapple: false,
  chicken: false,
  glutenFree: false,
  instructions: ''
};
const initialFormErrors = {
  name: '',
  size: '',
};

const initialPizzas = [];
const initialDisabled = true;




const App = () => {
  const [ pizzas, setPizzas] = useState(initialPizzas)
  const [formValues, setFormValues] = useState(initialFormValues);
  const [ formErrors, setFormErrors ] = useState(initialFormErrors);
  const [ disabled, setdisabled ] = useState(initialDisabled);

  // const getPizzas = () => {
  //   axios
  //   .get('http://localhost:3001/pizzas')
  //   .then((res) => {
  //     setPizzas(res.data)
  //     console.log('hello success axios', res);
  //   })
  //   .catch((err) => {
  //     console.log('hello error', err);
  //   });
  // };

  const postNewPizza = (newPizza) => {
    // axios
    // .post('http://localhost:3001/pizzas', newPizza)
    // .then((res) => {
    //   setPizzas([ res.data, ...pizzas ]);
    //   setFormValues(initialFormValues);
    // })
    // .catch((err) => {
    //   console.log(err);
    // })
    console.log(newPizza)
    console.log(pizzas);
    setPizzas([newPizza, ...pizzas]);
    setFormValues(initialFormValues);
    pizzas.push(newPizza);
    console.log('newpizzas', pizzas);
    return newPizza, pizzas;
  }

  const inputChange = (name, value) => {

    yup
    .reach(schema, name)
    .validate(value)
    .then(() => {
      setFormErrors({
        ...formErrors,
        [name] : ''
      })
    })
    .catch((err) => {
      setFormErrors({
        ...formErrors,
        [name] : err.errors[0]
      });
    });
    setFormValues({
      ...formValues,
      [name] : value
    })
  }

  const formSubmit = () => {
    const newPizza = {
      name: formValues.name.trim(),
      size: formValues.size,
      sauce: formValues.sauce,
      toppings : ['pepperoni', 'sausage', 'onions', 'peppers', 'pineapple', 'chicken' ].filter((top) => formValues[top]),
      glutenFree: formValues.glutenFree,
      instructions: formValues.instructions
    };
    postNewPizza(newPizza)
  }

  // useEffect(() => {
  //   getPizzas();

  // }, []);

  useEffect(() => {
    schema.isValid(formValues).then((valid) => {
      setdisabled(valid);
    });
  },
  [ formValues ]
  );





  return (
    <div>
      <nav>
        <div>LAMBDA EATS</div>
        <BrowserRouter>
        <Link to='/'>Home</Link>
        </BrowserRouter>
        <BrowserRouter>
        <Link to='/'>Help</Link>
        </BrowserRouter>
      </nav> 
      <div className='hero-img'>
        <h2>Your favorite food delivered while coding</h2>
      </div>


    <>
      <BrowserRouter>
      <Switch>
        <Route path={'/pizza'}>
          <Form
          values={formValues}
          change={inputChange}
          submit={formSubmit}
          disabled={disabled}
          errors={formErrors}
          />
        </Route>
{/* 
        <Route path={'/Pizza'}>
          <Pizza />
        </Route> */}

        <Route path={'/'}>
          <Home />
        </Route>
      </Switch>
      </BrowserRouter>
      </>
    </div>
  );
};
export default App;
