import React, { Component } from 'react';
import { Container, Row, Form } from 'react-bootstrap';
import "./Signup Form.css";

class Confirmation extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addDetails();
        console.log("hello")
    }

    back = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();
        console.log("hello")
    };

    render() {
        const { inputValues: { firstName, lastName, email, address, city, province } } = this.props;

        return (
            <Container style={{
                boxSizing: "border-box",
                margin: "0",
                padding: "0",
                backgroundColor: "#f1f1f1",
                fontFamily: "lato, sanSerif",
                width: "400px",
                height: "100vh",
                borderRadius: "8px"
            }} >

                <Form onSubmit={this.handleSubmit} style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100vh"
                }}>

                    <Row style={{
                        backgroundColor: "white",
                        width: "400px",
                        borderRadius: "8px",
                        padding: "20px 40px",
                        boxShadow: "0 10px 25px rgba(92, 99, 105, .2)",
                        justifyContent: "center",
                        alignItems: "center",
                    }}>
                        <h1>Confirm your Details</h1>
                        <p >Confirm if the following details are correct.</p>
                        <p id='firstName'>First Name: {firstName}</p>
                        <p id='lastName'>Last Name: {lastName}</p>
                        <p id='email'>Email: {email}</p>
                        <p id='address'>Address: {address}</p>
                        <p id='city'>City: {city}</p>
                        <p id='province'>Province: {province}</p>

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

                        <button variant="primary" type="submit" style={{
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
                    </Row>
                </Form>
            </Container>
        );
    }
}

export default Confirmation;
