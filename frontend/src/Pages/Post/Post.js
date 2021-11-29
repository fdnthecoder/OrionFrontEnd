import React from 'react';
import { Stack, Button, Container } from 'react-bootstrap';

class Post extends React.Component{
    render(){
        return(
            <Container>
                <h1> {this.props.location.state.jobName} </h1>
                <p> {this.props.location.state.jobDesc} </p>
                <Stack gap={2} className="col-md-5 mx-auto">
                    <Button variant="outline-success">
                        Apply for internship
                    </Button>
                    <Button variant="outline-danger">
                        Return to listings
                    </Button>
                </Stack>    
            </Container>
        );
    }
}

export default Post;