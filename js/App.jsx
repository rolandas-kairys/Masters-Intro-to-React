// @flow


import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Landing from './Landing';
import Search from './Search';
import Details from './Details';
import preload from '../data.json';



const FourOhFour = () => <h1>404 - Page Not Found</h1>

const App = () => (
  <BrowserRouter>
    <div className="app">
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/search" component={Search} />
        <Route path="/details/:id" component={() => <Details show={ preload.shows } />} />
        <Route component={FourOhFour} />
      </Switch>
    </div>
  </BrowserRouter>
);


export default App;
