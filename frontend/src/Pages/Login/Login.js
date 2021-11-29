import React from 'react'
import logoURL from '../../Assets/logo-black.png'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import './Login.css';
import axios from "axios";
import config from '../../config'

const SIGNIN_URL = config.SIGNIN_URL;
class Login extends React.Component{
    ///Need to change request to GET instead of POST
    constructor (props){
        super(props);
        this.state = {
            username: "", 
            password: ""
        };
        this.updateUsername = this.updateUsername.bind(this);
        this.updatePassword = this.updatePassword.bind(this);
        this.onClick = this.onClick.bind(this);

    }

    updateUsername(event){
        this.setState({ username: event.target.value});
    }

    updatePassword(event){
        this.setState({ password: event.target.value});

    }
    onClick(event) {
        event.preventDefault();
        axios.post(`${SIGNIN_URL}`, 
            {
            username: this.state.username,
            password: this.state.password,
            }
        ).then((response) => {
            if (response.data.Status === "exist"){
                localStorage.setItem('username', this.state.username)
                this.props.history.push("/home");
                window.location.reload(false);
                alert("You have successfully logged in!")
            }
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
                        <Form onSubmit = {this.onClick}>
                            <Form.Group>
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="username" onChange={this.updateUsername} placeholder="Username" />
                            </Form.Group>   
                            <Form.Group>
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" onChange={this.updatePassword} placeholder="Password" />
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