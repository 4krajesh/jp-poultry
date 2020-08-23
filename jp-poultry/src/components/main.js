import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';

class Main extends Component {
	constructor(props) {
    super(props);
		this.state = {sheds: [{ name: "Shed1"}, { name: "Shed2"}]};
  }
	render() {
		const listSheds = this.state.sheds.map((shed, index) =>
			<Card style={{ width: '18rem' }} key={index}>
  <Card.Body>
    <Card.Title>Shed Name</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Shed ID</Card.Subtitle>
    <Card.Text>
			<p>Start Date: </p>
			<p>End Date:</p>
			<p>Current Week:</p>
    </Card.Text>
    <Card.Link href={`/shed/${shed.name}`}>Show details</Card.Link>
  </Card.Body>
</Card>
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
