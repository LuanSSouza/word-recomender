import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import './final.css';

export class Final extends Component {

    handleSubmit = (event) => {
        event.preventDefault();

        this.props.history.push('/');
    }

    render() {
        return (
            <div className="finish">
                <h1 className="thank-you">Thank you for participating in our survey!</h1>
                <Button variant="primary" onClick={this.handleSubmit}>Restart</Button>
            </div>
        )
    }
}

export default Final
