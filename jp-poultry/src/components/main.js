import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'
import NewShed from './newshed';
import {
  Route,
  BrowserRouter
} from "react-router-dom";


class Main extends Component {
	constructor(props) {
    super(props);
		this.state = {sheds: [{ name: "Shed1"}, { name: "Shed2"}]};
  }
	render() {
		const listSheds = this.state.sheds.map((shed, index) =>
			<Button variant="light" key={index}>{shed.name}</Button>
		);
		

		return (
                <div>
	  <Button variant="dark" href="/newshed">New Shed</Button>
			{listSheds}
                </div>
                );
        }

}
export default Main;
