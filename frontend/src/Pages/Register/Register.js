import React from "react"
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import "./Register.css"

class Register extends React.Component{
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