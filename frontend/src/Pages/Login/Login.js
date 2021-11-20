import React from 'react'
import logoURL from '../../Assets/logo-black.png'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import './Login.css';
import axios from "axios";

class Login extends React.Component{
    constructor (props){
        super(props);
        this.state = {
            email: "", 
            password: ""
        };
        this.changeEmail = this.changeEmail.bind(this);
        this.changePassword = this.changePassword.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    changeEmail(event){
        this.setState({ email: event.target.value});
    }

    changePassword(event){
        this.setState({ password: event.target.value});

    }
    onClick(event) {
        event.preventDefault();
        axios.post("https://orion-crepe.herokuapp.com/user", {
            email: this.state.email,
            password: this.state.password,
        }).then((response) => {
            console.log(response);
        })
        .catch((err) => {
            console.log(err);
        });
    }

    render(){
        return(
            <div className="login-body">
                <div className="login-div">
                    <Image src={logoURL} width="200" height="200"/>
                    <div>
                        <Form>
                            <Form.Group>
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="email" onChange={this.changeEmail} placeholder="Username" />
                            </Form.Group>   
                            <Form.Group>
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" onChange={this.changePassword} placeholder="Password" />
                            </Form.Group>
                            <br />   
                            <Button text-align="center" variant="outline-dark" type="submit">
                                Login
                            </Button>{' '}
                        </Form>
                        <a href="/register">Don't have an account? Register here</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;