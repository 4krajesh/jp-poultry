import React, { Fragment } from 'react';

const Feeds = () => {
    return (
        <Fragment>
            <table className="table table-bordered table-sm">
            <div className="form-group">
                <thead className="text-center">
                    <tr>
                        <th colSpan="6">Feeds</th>
                    </tr>
                    <tr>
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
                </div>
            </table>
        </Fragment>
    );
}

export default Feeds;
