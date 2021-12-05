import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
//import { useEffect, useState } from 'react';
import "./Register.css";
import axios from "axios";
import config from "../../config";
import Popup from "../../Components/Popup/Popup";
import Loading from "../../Components/Loading/Loading";

const SIGNUP_URL = config.SIGNUP_URL
class Register extends React.Component{
    constructor (props){
        super(props);
        this.state = {
            email: "",
            username: "", 
            password: "",
            loading: false, 
            message: "",
        };
        this.changeEmail = this.changeEmail.bind(this);
        this.changeUsername = this.changeUsername.bind(this);
        this.changePassword = this.changePassword.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    changeEmail(event){
        this.setState({email: event.target.value});
    }
    changeUsername(event){
        this.setState({ username: event.target.value});
    }

    changePassword(event){
        this.setState({ password: event.target.value});

    }


    async postSignUp(){
        this.setState({loading: true})
        return await axios.post(`${SIGNUP_URL}`, {
            email: this.state.email,
            username: this.state.username,
            password: this.state.password
        })

    }
    onClick(event) {
        event.preventDefault();
        this.postSignUp().then((response) => {
            console.log(response);
            if (!response.status === 200){
                this.setState({message: response.data});
            }
        })
        .catch((err) => {
            this.setState({message: err});
        });
    }


    //Need to figure out a way to display whether sign upn was success or failur
    // 1. Triggering by checking response from request and displaying with html
    // 2. Using react alerts package 

    render(){
        if (this.state.loading){
            return (
                <Loading loading={this.state.loading}></Loading>
            )
        } else {
            return(
                <div className="register-body">
                    {this.state.message && <Popup message = {this.state.message} history={this.props.history} pageChange="/profile" page = "Login" />}
                    <div className="register-div">
                        <h1>Register a new account</h1>
                        <div>
                            <Form onSubmit = {this.onClick}>
                                <Form.Group>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="Email" onChange={this.changeEmail} placeholder="Email" required isInvalid/>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control type="username" onChange={this.changeUsername}  placeholder="Username" required isInvalid/>
                                </Form.Group>   
                                <Form.Group>
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" onChange={this.changePassword} placeholder="Password" required isInvalid/>
                                </Form.Group>
                                <br />   
                                <Button variant="outline-dark" type="submit">
                                    Register
                                </Button>{' '}
                            </Form>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default Register;