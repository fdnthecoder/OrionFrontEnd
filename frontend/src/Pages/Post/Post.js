import React from 'react';
import { Stack, Button, Container } from 'react-bootstrap';

class Post extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            jobName : "Sample Job Name",
            jobDesc : "Sample Job Desc"
        };
    }

    render(){
        return(
            <Container>
                <h1> {this.state.jobName} </h1>
                <p> {this.state.jobDesc} </p>
                <Stack>
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