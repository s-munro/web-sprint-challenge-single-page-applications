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
      </div>


    <>
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
