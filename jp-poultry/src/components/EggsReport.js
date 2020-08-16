import React, { Fragment } from 'react';

const EggsReport = () => {
    return (
        <Fragment>
        <table className="table table-bordered table-sm">
        <div className="form-group">
            <thead className="text-center">
                <tr>
                    <th colspan="6">EGGS REPORT</th>
                </tr>
                <tr>
                    <th>Opening</th>
                    <th>Production</th>
                    <th>Total Eggs</th>
                    <th>Sales</th>
                    <th>Damaged</th>
                    <th>Closing</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><input type="number" /></td>
                    <td><input type="number" /></td>
                    <td><input type="number" /></td>
                    <td><input type="number" /></td>
                    <td><input type="number" /></td>
                    <td><input type="number" /></td>
                </tr>
                <tr>
                    <td><input type="number" /></td>
                    <td><input type="number" /></td>
                    <td><input type="number" /></td>
                    <td><input type="number" /></td>
                    <td><input type="number" /></td>
                    <td><input type="number" /></td>
                </tr>
            </tbody>
            </div>
        </table>
        </Fragment>
    );
}

export default EggsReport;