import React, { Fragment } from 'react';

const Eggs = () => {
    return (
        <Fragment>
        <table className="table table-bordered">
            <thead>
                <tr>
                    <th colspan="5" className="text-center">EGGS</th>
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
        </Fragment>

    );
}

export default Eggs;