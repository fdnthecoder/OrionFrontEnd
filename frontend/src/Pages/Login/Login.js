import React from 'react'
import logoURL from '../../Assets/logo-black.png'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import './Login.css'

class Login extends React.Component{
    render(){
        return(
            <div className="login-body">
                <div className="login-div">
                    <div>
                        <Image src={logoURL} width="200" height="200"/>
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
                            <Button variant="outline-dark" type="submit">
                                Login
                            </Button>{' '}
                        </Form>
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;