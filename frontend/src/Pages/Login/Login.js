import React from 'react'
import logoURL from '../../Assets/logo-black.png'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import './Login.css'
import { responsivePropType } from 'react-bootstrap/esm/createUtilityClasses'

class Login extends React.Component{
    render(){
        return(
            <div className="login-body">
                <div className="login-div">
                    <Image src={logoURL} width="200" height="200"/>
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