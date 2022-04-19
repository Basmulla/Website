import React, { Component } from 'react';
import { Form, Col, Row, Container } from 'react-bootstrap';
import './Signup Form.css';

<link href='https://fonts.googleapis.com/css2?family=Lato&display=swap' rel="stylesheet" />;

class UserDetails extends Component {

    back = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    };

    render() {
        return (<Container style={{
            boxSizing: "border-box",
            width: "100%",
            margin: "0",
            padding: "0",
            backgroundColor: "#f1f1f1",
            fontFamily: "lato, sanSerif"
        }}>
            <Form style={{
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
                    boxShadow: "0 10px 25px rgba(92, 99, 105, .2)"
                }}>
                    <h1 class="title" style={{
                        fontSize: "50px",
                        marginBottom: "50px"
                    }}>SignUp Form</h1>
                    <Form.Group as={Col} controlId="formFirstName" style={{
                        position: "relative",
                        height: "45px",
                        width: "90%",
                        marginBottom: "17px"
                    }}>
                        <Form.Label className='label' style={{
                            position: "absolute",
                            top: "15px",
                            left: "0px",
                            padding: "0 4px",
                            backgroundColor: "white",
                            color: "#DADCE0",
                            fontSize: "16px",
                            transition: "0.5s",
                            zIndex: "0"
                        }}>First Name</Form.Label>
                        <Form.Control style={{
                            position: "absolute",
                            top: "0px",
                            left: "0px",
                            height: "100 %",
                            width: "100 %",
                            border: "1px solid #DADCE0",
                            borderRadius: "7px",
                            fontSize: "16px",
                            padding: "0 20px",
                            outline: "none",
                            background: "none",
                            zIndex: "1"
                        }}
                            type='text'
                            defaultValue={this.props.inputValues.firstName}
                            name="firstName"
                            required
                            onChange={this.props.handleChange}
                        />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formLastName" style={{
                        position: "relative",
                        height: "45px",
                        width: "90%",
                        marginBottom: "17px"
                    }}>
                        <Form.Label className='label' style={{
                            position: "absolute",
                            top: "15px",
                            left: "0px",
                            padding: "0 4px",
                            backgroundColor: "white",
                            color: "#DADCE0",
                            fontSize: "16px",
                            transition: "0.5s",
                            zIndex: "0"
                        }}>Last Name</Form.Label>
                        <Form.Control style={{
                            position: "absolute",
                            top: "0px",
                            left: "0px",
                            height: "100 %",
                            width: "100 %",
                            border: "1px solid #DADCE0",
                            borderRadius: "7px",
                            fontSize: "16px",
                            padding: "0 20px",
                            outline: "none",
                            background: "none",
                            zIndex: "1"
                        }}
                            type='text'
                            defaultValue={this.props.inputValues.lastName}
                            name="lastName"
                            required
                            onChange={this.props.handleChange}
                        />
                    </Form.Group>

                    <Form.Group contolled="formEmail" style={{
                        position: "relative",
                        height: "45px",
                        width: "90%",
                        marginBottom: "17px"
                    }}>
                        <Form.Label className='label' style={{
                            position: "absolute",
                            top: "15px",
                            left: "0px",
                            padding: "0 4px",
                            backgroundColor: "white",
                            color: "#DADCE0",
                            fontSize: "16px",
                            transition: "0.5s",
                            zIndex: "0"
                        }}>Email Address</Form.Label>
                        <Form.Control style={{
                            position: "absolute",
                            top: "0px",
                            left: "0px",
                            height: "100 %",
                            width: "100 %",
                            border: "1px solid #DADCE0",
                            borderRadius: "7px",
                            fontSize: "16px",
                            padding: "0 20px",
                            outline: "none",
                            background: "none",
                            zIndex: "1"
                        }}
                            type="email"
                            defaultValue={this.props.inputValues.email}
                            name="email"
                            required
                            onChange={this.props.handleChange} />
                    </Form.Group>


                    <button variant="primary" style={{
                          display: "block",
                          marginLeft: "auto",
                          padding: "15px 30px",
                          border: "none",
                          backgroundColor: "purple",
                          color: "white",
                          borderRadius: "6px",
                          cursor: "pointer",
                          fontSize: "16px",
                          marginTop: "30px"
                    }} onClick={this.saveAndContinue}>Next</button>
                </Row>
            </Form>
        </Container >
        );
    };
}

export default UserDetails;