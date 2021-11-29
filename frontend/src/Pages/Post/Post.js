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
        event.preventDefault();
        axios.post(`${APPLICATION_URL}`,{
            postId: this.props.location.state.postId,
            status: "saved",
            company: this.props.location.state.company,
            title: this.props.location.state.title,
            url: this.props.location.state.url,

        }).then((response) => {
            console.log(response);
        }).catch((err) => {
            console.log(err)
        });
    }
    render(){
        return(
            <Container>
                <h1> {this.props.location.state.title} </h1>
                <h2> {this.props.location.state.company} </h2>
                <h2> {this.props.location.state.level} </h2>
                <p> {this.props.location.state.description} </p>
                <Stack gap={2} className="col-md-5 mx-auto">
                    <Button onClick = {this.onClick} variant="outline-success">
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