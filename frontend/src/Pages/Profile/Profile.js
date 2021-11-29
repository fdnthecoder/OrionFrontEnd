import React from 'react'
import './Profile.css'
import Image from 'react-bootstrap/Image'
import Manager from '../Manager/Manager'
import logoURL from '../../Assets/defaultProfilePic.png'
import {  Card, Container, Row, Col} from "react-bootstrap"
import axios from 'axios';
import config from '../../config'

const PROFILE_URL = config.PROFILE_URL;

class Profile extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: localStorage.getItem("username"),
            email: "",
            applications:[],
            data:[],
            isMount: "false",
        }
    }

	componentDidMount(){
        this.isMount = true;
		axios.get(`${PROFILE_URL}`,
        {
            params:{
                username: this.state.username,
            }
        }).then(response => {

            if (this.isMount){
                this.setState({data: response.data});
                this.setState({email: response.data.email});
                this.setState({applications: response.data.applications})

            }
		}).catch((err) => {
            console.log(err);
        })
	};


    render(){
        return(
            <Container fluid>
                <Image src={logoURL} roundedCircle/>
                <h1>Hello {this.state.username}!</h1>
                <h2>Email: {this.state.email}</h2>
                <br />
                <h2>All jobs you've interacted with</h2><br />
                <Row xs={1} md={2} className="g-4">
                {this.state.applications.map(listings => (
                    <Col key={"col" + listings.postID}>
                        <Card key={"entry" + listings.postID} >
                            <Card.Title key={"title" + listings.title}>{listings.title}</Card.Title>
                            <Card.Title key={"company" + listings.company}>{listings.company}</Card.Title>
                            <Card.Body key={"body" + listings.status}>
                                <Card.Link href= {listings.url} key={"url" + listings.url} >
                                    Check out the official listing here
                                </Card.Link>
                            </Card.Body>
                            <Card.Footer key={"footer"+ listings.status}>Status: {listings.status}</Card.Footer>
                        </Card>
                    </Col>
                ))}
                </Row><br />
                <h2>Manage your job applications below!</h2><br />
                <Manager applications={this.state.applications} />
            </Container>
        );
    }
}

export default Profile;