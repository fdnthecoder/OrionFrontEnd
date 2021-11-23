import React from 'react'
import { Button, Form, Container } from 'react-bootstrap'
// import axios from 'axios'

class PostInternships extends React.Component{
    render() {
        return (
            <Container>
                <h1>Post a new job</h1>
                <Form>
                    <Form.Group>
                        <Form.Label>
                            Location and Position
                        </Form.Label>
                        <Form.Control type="input" />
                    </Form.Group>
                    <br />
                    <Form.Group>
                        <Form.Label>
                            Description of the Listing
                        </Form.Label>
                        <Form.Control as="textarea" />           
                    </Form.Group>
                    <br />
                    <Button >
                        Post new listing
                    </Button>
                </Form>
            </Container>
        );
    }
}

export default PostInternships;