import React,{ Fragment } from 'react';

const Medicines = () => {
    return (
        <Fragment>
        <div className="form-group">
        <table className="table table-bordered table-sm">
            <thead className="text-center">
                <tr>
                    <th colSpan="5">EGGS</th>
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
        </table>
            </div>
        </Fragment>
    );
}

export default Medicines;
