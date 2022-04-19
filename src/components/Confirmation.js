import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import "./Signup Form.css";

class Confirmation extends Component {

    back = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    };

    render() {
        const { inputValues: { firstName, lastName, email, address, city, province } } = this.props;

        return (
            <Container style={{
                boxSizing: "border-box",
                width: "100%",
                margin: "0",
                padding: "0",
                backgroundColor: "#f1f1f1",
                fontFamily: "lato, sanSerif"
            }} >
                <h1>Confirm your Details</h1>
                <p>Confirm if the following details are correct.</p>
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Email: {email}</p>
                <p>Address: {address}</p>
                <p>City: {city}</p>
                <p>Province: {province}</p>
                <button variant="secondary" style={{
                    marginLeft: "auto",
                    padding: "15px 30px",
                    border: "none",
                    backgroundColor: "blue",
                    color: "white",
                    borderRadius: "6px",
                    cursor: "pointer",
                    fontSize: "16px",
                    marginTop: "15px"
                }} onClick={this.back}>Back</button>
                <button variant="primary" style={{
                    marginLeft: "auto",
                    padding: "15px 30px",
                    border: "none",
                    backgroundColor: "purple",
                    color: "white",
                    borderRadius: "6px",
                    cursor: "pointer",
                    fontSize: "16px",
                    marginTop: "15px"
                }} onClick={this.saveAndContinue}>Confirm</button>
            </Container>
        );
    }
}

export default Confirmation;
