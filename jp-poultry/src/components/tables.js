import React, { Fragment } from 'react';

const Tables = () => {
    return (
    <Fragment>
      <table class="table table-bordered">
        <thead>
        <tr>
            <th colspan="6" className="text-center">Birds</th>
        </tr>
        <tr>
            <th>Sl.No</th>
            <th>Age in Weeks</th>
            <th>Str in Morning</th>
            <th>Mortality</th>
            <th>Culled</th>
            <th>Str in Evening</th>
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
        </tr>
        <tr>
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
        </tr>
    </tbody>
  </table>
    </Fragment>
    );
}

export default Tables;