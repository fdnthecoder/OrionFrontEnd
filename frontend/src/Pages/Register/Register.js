import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
//import { useEffect, useState } from 'react';
import "./Register.css";
import axios from "axios";

class Register extends React.Component{
    constructor (props){
        super(props);
        this.state = {
            username: "",
            password: "",
        };
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this)
        this.onClick = this.onClick.bind(this);
    }

    onChangeUsername(event){
        this.setState({ username: event.target.username });
        console.log(event.target.username)
    }

    onChangePassword(event){
        this.setState({ password: event.target.password});
        console.log(event.target.password)
    }
    onClick(event) {
        alert('A name was submitted: ' + this.state.username);
        alert("a password has been submitted: ", this.state.password)
        event.preventDefault();
        //https://orion-crepe.herokuapp.com
        axios.post("https://orion-crepe.herokuapp.com/user", {
            username: this.state.username,
            password: this.state.password,
        }).then((response) => {
            // console.log(this.state.username);
            // console.log(this.state.password);
            console.log(response);
        })
        .catch((err) => {
            console.log(err);
        });
    }

    render(){
        return(
            <div className="register-body">
                <div className="register-div">
                    <h1>Register a new account</h1>
                    <div>
                        <Form onSubmit = {this.onClick}>
                            <Form.Group>
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="username" value={this.state.username} onChange={event => this.onChangeUsername(event)}  placeholder="Username" />
                            </Form.Group>   
                            <Form.Group>
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" value= {this.state.password} onChange={event => this.onChangePassword(event)} placeholder="Password" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Confirm your password</Form.Label>
                                <Form.Control type="password" placeholder="Confirm Password" />
                            </Form.Group>
                            <br />   
                            <Button variant="outline-dark" type="submit">
                                Register
                            </Button>{' '}
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register;