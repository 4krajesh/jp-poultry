import React, { Fragment } from 'react';
import { Button } from 'react-bootstrap';
import './App.css';
import Main from './components/main';
import NewShed from './components/newshed';
import {
  Route,
  BrowserRouter
} from "react-router-dom";

function App() {
  return (
    <Fragment>
	  <div>
          <h1 className="text-center mt-5">Jeypore Poultry Farms</h1>
	  <BrowserRouter>
	    <Route exact path="/" component={Main}/>
	    <Route exact path="/newshed" component={NewShed}/>
          </BrowserRouter>
	  </div>
    </Fragment>
  );
}

export default App;
