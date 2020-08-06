import React, { Fragment } from 'react';
import { FaPhone } from 'react-icons/fa';
import './App.css';
import Tables from './components/tables';
import Feeds from './components/Feeds';
import Eggs from './components/Eggs';
import FeedReport from './components/FeedReport';
import EggsReport from './components/EggsReport';

function App() {
  return (
    <Fragment>
    <h1 className="text-center mt-5">Jeypore Poultry Farms</h1>
    <p className="text-center"><strong>Daily Report</strong></p>
    <div className="container mt-2">
      <div className="row">
        <div className="col">
        <label className="required">Per Egg:</label>
        <input type="number" />
        </div>
        <div className="col">
          <label className="required">Rate BZA:</label>
          <input type="number" min="1" step="any" />
        </div>
        <div className="col">
          <div className="form-group">
            <label className="required">Date:</label>
            <input type="date" name="date" />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
        <label className="required">Per Bird:</label>
        <input type="number" />
        </div>
        <div className="col">
          <label className="required">Rate VSKP:</label>
          <input type="number" min="1" step="any" />
        </div>
        <div className="col">
          <div className="form-group">
            <label className="required">Total Production(%)</label>
            <input type="number" />
          </div>
        </div>
      </div>
    </div>
    <div className="container-fluid">
    <Tables />
    <Feeds/>
    <Eggs />
    <FeedReport />
    <EggsReport />
    </div>
    </Fragment>
  );
}

export default App;
