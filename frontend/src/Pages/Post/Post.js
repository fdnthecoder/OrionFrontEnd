
import React from 'react';
import { Badge, Stack, Button, Container} from 'react-bootstrap';
import axios from 'axios';
import config from '../../config';
import Popup from '../../Components/Popup/Popup';
import Loading from '../../Components/Loading/Loading';

const APPLICATION_URL = config.APPLICATION_URL;
class Post extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            message : "",
            loading: false,
        }
        this.onClick = this.onClick.bind(this);
    }

    async getJobInfo(){
        this.setState({loading: true});
        return await axios.post(`${APPLICATION_URL}`,{
            username: localStorage.getItem("username"),
            postID: this.props.location.state.postID,
            status: "Saved",
            company: this.props.location.state.company,
            title: this.props.location.state.title,
            url: this.props.location.state.url,
        })
    }
    onClick(event){
        event.preventDefault();
        this.getJobInfo().then((response) => {
            console.log(response);
            this.setState({loading: false})
            this.setState({message: response.data.Status});
        }).catch((err) => {
            console.log(err)
        });
    }

    render(){
        if (this.state.loading){
            return (
                <Loading loading={this.state.loading}></Loading>
            );
        } else {
            return(
                <Container>
                    {this.state.message && <Popup message = {this.state.message} history={this.props.history} pageChange="/profile" page = "Adding To Application" />}

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
                            <Button href = "/internships" variant="outline-danger">
                                Return to listings
                            </Button>
                    </Stack>    
                </Container>
            );
        }
    }
}

export default Post;