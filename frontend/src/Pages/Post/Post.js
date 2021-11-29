import axios from 'axios';
import React from 'react';
import { Stack, Button, Container } from 'react-bootstrap';
import config from '../../config';

const APPLICATION_URL = config.APPLICATION_URL;
class Post extends React.Component{

    constructor(props){
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick(event){
        event.PreventDefault();
        axios.post(`${APPLICATION_URL}`,{
            

        }).then((response) => {
            console.log(response);
        }).catch((err) => {
            console.log(err)
        });
    }
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