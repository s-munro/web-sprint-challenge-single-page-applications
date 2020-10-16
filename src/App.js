import React from "react";
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Home from './Home';
import Form from './Form'
// import Pizza from './Pizza'

const App = () => {
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
        <BrowserRouter>
        <Link to='/pizza'>Pizza?</Link>
        </BrowserRouter>
      </div>


    <>
      <h1>Lambda Eats</h1>
      <p>You can remove this code and create your own header</p>
      <BrowserRouter>
      <Switch>
        <Route path={'/pizza'}>
          <Form />
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
