import React, { Component } from 'react';
import { Container, Form, Row } from 'react-bootstrap';
import firebase from 'firebase/compat/app';
import "firebase/compat/firestore";


class MultiStepForm extends Component {
    render() {
        return (
            <div className='App'>
                <Container style={{
                    boxSizing: "border-box",
                    width: "100%",
                    margin: "0",
                    padding: "0",
                    backgroundColor: "#f1f1f1",
                    fontFamily: "lato, sanSerif"
                }}>
                    <Form name='signin' onSubmit={handleSubmit} style={{
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
                        <h1 class="title">SignUp Form</h1>

                        <p ><label>First Name</label> </p>
                        <input
                            name='firstName'
                            type="text"
                            placeholder='Enter first name...' />

                        <p><label>Last Name</label> </p>
                        <input
                            name='lastName'
                            type='text'
                            placeholder='Enter last name...' />

                        <p><label>Email Address</label></p>
                        <input
                            name='emailAddress'
                            type='text'
                            placeholder='Enter email address...' />

                        <p> <label>Address</label></p>
                        <input
                            name='address'
                            type='text'
                            placeholder='Enter Address...' />

                        <p><label>City</label></p>
                        <input
                            name='city'
                            type='text'
                            placeholder='Enter City...' />

                        <p><label>Province</label></p>
                        <input
                            name='province'
                            type='text'
                            placeholder='Enter Province' />
                        <br/>
                        &nbsp;
                        <br/>
                        <button type="submit" style={{
                            display: "block",
                            backgroundColor: "purple",
                            color: "white",
                            borderRadius: "6px",
                            cursor: "pointer",
                        }}>Sign In</button>
                        </Row>
                    </Form>
                </Container>
            </div>
        )
    }
}


async function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;

    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const emailAddress = form.emailAddress.value;
    const address = form.address.value;
    const city = form.city.value;
    const province = form.province.value;
    const firestore = firebase.firestore();

    const signin = await firestore.collection("User Details").add({ firstName, lastName, emailAddress, address, city, province });

    alert(`Added User Information with id ${signin.id}`);
    form.reset();
}

export default MultiStepForm;