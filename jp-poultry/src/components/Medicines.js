import React,{ Fragment } from 'react';

const Medicines = () => {
    return (
        <Fragment>
        <table className="table table-bordered table-sm">
        <div className="form-group">
            <thead className="text-center">
                <tr>
                    <th colspan="5">EGGS</th>
                </tr>
                <tr>
                    <th>Eggs</th>
                    <th>Production(%)</th>
                    <th>Record Feeds</th>
                    <th>Record(%)</th>
                    <th>REMARKS</th>
                </tr>
            </thead>
            <tbody>
            <tr>
                <td><input type="text" /></td>
                <td><input type="number" /></td>
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
            </tr>
            <tr>
                <td><input type="text" /></td>
                <td><input type="number" /></td>
                <td><input type="text" /></td>
                <td><input type="text" /></td>
                <td><input type="text" /></td>
            </tr>
            </tbody>
            </div>
        </table>
        </Fragment>
    );
}

export default Medicines;