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
            data: "", 
            create: true,
        };
        this.click = this.click.bind(this);
    }

    click() {
        this.setState({ create: true})
        axios.post("https://orion-crepe.herokuapp.com/user", {}).then((response) => {
            console.log(response.data);
            this.setState({ 
                data:response.data,
                create: true}) 
            })
            .catch((err) => {
                this.setState({username:err, create: false,})
                console.log(err);
            });
    }
    render(){
        return(
            <div className="register-body">
                <div className="register-div">
                    <h1>Register a new account</h1>
                    <div>
                        <Form>
                            <Form.Group>
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="username" placeholder="Username" />
                            </Form.Group>   
                            <Form.Group>
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Confirm your password</Form.Label>
                                <Form.Control type="password" placeholder="Confirm Password" />
                            </Form.Group>
                            <br />   
                            <Button onClick={this.click} variant="outline-dark" type="submit">
                                Register
                            </Button>{' '}
                            {this.state.data}
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register;