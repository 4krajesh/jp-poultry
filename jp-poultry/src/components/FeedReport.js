import React, { Fragment } from 'react';

const FeedReport = () => {
    return (
        <Fragment>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th colspan="6" className="text-center">FEED REPORT</th>
                    </tr>
                    <tr>
                        <th>Variety</th>
                        <th>Opening</th>
                        <th>Received</th>
                        <th>Total</th>
                        <th>Use</th>
                        <th>Closing</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><input type="text" /></td>
                        <td><input type="number" /></td>
                        <td><input type="number" /></td>
                        <td><input type="number" /></td>
                        <td><input type="number" /></td>
                        <td><input type="number" /></td>
                    </tr>
                    <tr>
                        <td><input type="text" /></td>
                        <td><input type="number" /></td>
                        <td><input type="number" /></td>
                        <td><input type="number" /></td>
                        <td><input type="number" /></td>
                        <td><input type="number" /></td>
                    </tr>
                    <tr>
                        <td><input type="text" /></td>
                        <td><input type="number" /></td>
                        <td><input type="number" /></td>
                        <td><input type="number" /></td>
                        <td><input type="number" /></td>
                        <td><input type="number" /></td>
                    </tr>
                </tbody>
            </table>
        </Fragment>
    );
}

export default FeedReport;