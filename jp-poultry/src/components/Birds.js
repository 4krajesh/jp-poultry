import React, { Fragment } from 'react';

const Birds = () => {
    return (
    <Fragment>
      <div className="form-group">
      <table className="table table-bordered table-sm">
        <thead className="text-center">
        <tr>
            <th colSpan="6">Birds</th>
            <th colSpan="6">Feeds</th>
        </tr>
        <tr>
            <th>Sl.No</th>
            <th>Age in Weeks</th>
            <th>Str in Morning</th>
            <th>Mortality</th>
            <th>Culled</th>
            <th>Str in Evening</th>
            <th>Morning Stock</th>
            <th>Received</th>
            <th>Consumed</th>
            <th>Evening Stock</th>
            <th>Bird Avg.</th>
            <th>Egg Avg.</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td><input type="text" /></td>
            <td><input type="number" /></td>
            <td><input type="text" /></td>
            <td><input type="text" /></td>
            <td><input type="text" /></td>
            <td><input type="text" /></td>
            <td><input type="text" /></td>
            <td><input type="number" /></td>
            <td><input type="text" /></td>
            <td><input type="text" /></td>
            <td><input type="text" /></td>
            <td><input type="text" /></td>
        </tr>
        <tr>
            <td><input type="text" /></td>
            <td><input type="number" /></td>
            <td><input type="text" /></td>
            <td><input type="text" /></td>
            <td><input type="text" /></td>
            <td><input type="text" /></td>
            <td><input type="text" /></td>
            <td><input type="number" /></td>
            <td><input type="text" /></td>
            <td><input type="text" /></td>
            <td><input type="text" /></td>
            <td><input type="text" /></td>
        </tr>
        <tr>
            <td><input type="text" /></td>
            <td><input type="number" /></td>
            <td><input type="text" /></td>
            <td><input type="text" /></td>
            <td><input type="text" /></td>
            <td><input type="text" /></td>
            <td><input type="text" /></td>
            <td><input type="number" /></td>
            <td><input type="text" /></td>
            <td><input type="text" /></td>
            <td><input type="text" /></td>
            <td><input type="text" /></td>
        </tr>
    </tbody>
  </table>
    </div>
</Fragment>
    );
}

export default Birds;
