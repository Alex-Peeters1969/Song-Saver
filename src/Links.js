import React from "react";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link 
  } from "react-router-dom";

function Links() {
  return (
    <div className="Links">
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">My Favourites</Link>
            </li>            
          </ul>

          <Switch>
            <Route path="/about">
              <About />
            </Route>            
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>      
    </div>
  );
}

function Home() {
  return <h3>Please enter your favourite songs</h3>;
}

function About() {
  return <h3>Storage off your favourits songs </h3>;
    }

export default Links;