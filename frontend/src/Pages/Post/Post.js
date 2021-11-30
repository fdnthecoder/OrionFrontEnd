
import React from 'react';
import { Badge, Stack, Button, Container} from 'react-bootstrap';
import axios from 'axios';
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
                <Container style={{padding: "20px", display: "flex", justifyContent: "center"}}  className="me-auto">
                    <Container>
                        <h1> {this.props.location.state.title} </h1>
                        <Badge bg="success"> {this.props.location.state.company} </Badge> <Badge bg="dark"> {this.props.location.state.level} </Badge>
                    </Container>
                </Container>
                <Container style={{padding: "20px", display: "flex", justifyContent: "center"}}>
                    <Container>
                        {this.props.location.state.description}
                    </Container>
                </Container>
                <Stack gap={2} className="col-md-5 mx-auto">
                        <Button variant="outline-primary" href={this.props.location.state.url}> View the official listing here </Button>
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