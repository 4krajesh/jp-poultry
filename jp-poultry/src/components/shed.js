import React, { Fragment, Component } from 'react';
import Birds from './Birds';
import Eggs from './Eggs';
import FeedReport from './FeedReport';

class Shed extends Component {
	render() {

  return (
    <Fragment>
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
            <label className="required">Date:</label>
            <input type="date" name="date" />
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
            <label className="required">Total Production(%)</label>
            <input type="number" />
        </div>
      </div>
    </div>
    <div className="container-fluid mt-2">
    <Birds />
    <Eggs />
    <FeedReport />
    </div>
    </Fragment>
  );
	}
}

export default Shed;
