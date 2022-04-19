import React, { Component } from 'react';
import { Form, Col, Row, Container } from 'react-bootstrap';
import "./Signup Form.css";

class AddressDetails extends Component {

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
                    <Form.Group controlId="formAddress" style={{
                        position: "relative",
                        height: "45px",
                        width: "90%",
                        marginBottom: "17px"
                    }}>
                        <Form.Label style={{
                            position: "absolute",
                            top: "15px",
                            left: "0px",
                            padding: "0 4px",
                            backgroundColor: "white",
                            color: "#DADCE0",
                            fontSize: "16px",
                            transition: "0.5s",
                            zIndex: "0"
                        }}>Address</Form.Label>
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
                            type="text"
                            defaultValue={this.props.inputValues.address}
                            name="address"
                            required
                            onChange={this.props.handleChange} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formCity" style={{
                        position: "relative",
                        height: "45px",
                        width: "90%",
                        marginBottom: "17px"
                    }}>
                        <Form.Label style={{
                            position: "absolute",
                            top: "15px",
                            left: "0px",
                            padding: "0 4px",
                            backgroundColor: "white",
                            color: "#DADCE0",
                            fontSize: "16px",
                            transition: "0.5s",
                            zIndex: "0"
                        }}>City</Form.Label>
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
                            type="text"
                            defaultValue={this.props.inputValues.city}
                            name="city"
                            required
                            onChange={this.props.handleChange} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formProvince" style={{
                        position: "relative",
                        height: "45px",
                        width: "90%",
                        marginBottom: "17px"
                    }}>
                        <Form.Label style={{
                            position: "absolute",
                            top: "15px",
                            left: "0px",
                            padding: "0 4px",
                            backgroundColor: "white",
                            color: "#DADCE0",
                            fontSize: "16px",
                            transition: "0.5s",
                            zIndex: "0"
                        }}>Province</Form.Label>
                        <Form.Control as="select" name="province" defaultValue={this.props.inputValues.province} onChange={this.props.handleChange} style={{
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
                        }}>
                            <option value="AB">Alberta</option>
                            <option value="BC">British Columbia</option>
                            <option value="MB">Manitoba</option>
                            <option value="NB">New Bruinswick</option>
                            <option value="NL">Newfoundland and Labrador</option>
                            <option value="NT">NorthWest Territories</option>
                            <option value="NS">Nova Scotia</option>
                            <option value="NU">Nunavut</option>
                            <option value="ON">Ontario</option>
                            <option value="PE">Prince Edward Island</option>
                            <option value="QC">Quebec</option>
                            <option value="SK">Saskatchewan</option>
                            <option value="YT">Yukon</option>
                        </Form.Control>
                    </Form.Group>

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
                    }}  onClick={this.back}>Back</button>
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
                    }}  onClick={this.saveAndContinue}>Next</button>
                </Row>
            </Form>
        </Container>
        );
    }
}

export default AddressDetails;
