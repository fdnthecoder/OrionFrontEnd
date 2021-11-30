import React from 'react'
import './Profile.css'
import Image from 'react-bootstrap/Image'
// import Manager from '../Manager/Manager'
import logoURL from '../../Assets/defaultProfilePic.png'
import {  Button, Badge, Card, Container, Dropdown, Row, Col} from "react-bootstrap"
import axios from 'axios';
import config from '../../config'

const PROFILE_URL = config.PROFILE_URL;
const APPLICATION_URL = config.APPLICATION_URL;

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
        this.updateStatus = this.updateStatus.bind(this);
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
                console.log(this.state.applications);

            }
		}).catch((err) => {
            console.log(err);
        })
	};

    updateStatus(event){
        axios.put( `${APPLICATION_URL}`, {
            postID: event.target.id,
            status: event.target.name,
        }).then((response) => {
            console.log(response);
        }).catch((err) => { 
            console.log(err);
        })
    }

    render(){
        return(
            <Container className="me-auto">
                <Container style={{display: "flex", justifyContent: "center", padding: "20px"}}>
                    <Image style={{paddingTop: "20px", marginRight: "5rem"}} src={logoURL} roundedCircle/>
                    <Container style={{marginTop: "5rem"}}>
                        <h1>{this.state.username}</h1>
                        <h4>{this.state.email}</h4>
                        <br />
                    </Container>
                </Container>
                <h2 className="text-center">All jobs you've interacted with</h2><br />
                <Row xs={1} md={2} className="g-4">
                {this.state.applications?.map(listings => (
                    <Col key={"col" + listings.postID}>
                        <Card style={{maxWidth: '50rem'}} key={"entry" + listings.postID} >
                            <Card.Header key={"badge" + listings.postID}>
                                <Badge bg="success">{listings.company}</Badge> 
                            </Card.Header>
                            <Card.Title key={"company" + listings.postID}>
                            </Card.Title>
                            <Card.Body key={"body" + listings.postID}>
                                <Card.Title key={"title" + listings.postID}>{listings.title}</Card.Title>
                                <Card.Link href= {listings.url} key={"url" + listings.url} >
                                    Check out the official listing here
                                </Card.Link>
                            </Card.Body>
                            <Card.Footer key={"footer"+ listings.postID}> 
                                    <Dropdown className="me-auto">
                                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                                            Status: {listings.status}
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item id={listings.postID} name="Interested" onClick= {this.updateStatus}>Interested</Dropdown.Item>
                                            <Dropdown.Item id={listings.postID} name="Applied" onClick = {this.updateStatus}>Applied</Dropdown.Item>
                                            <Dropdown.Item id={listings.postID} name="Interview" onClick = {this.updateStatus}>Interviewing</Dropdown.Item>
                                            <Dropdown.Item id={listings.postID} name="Done" onClick = {this.updateStatus}>Done</Dropdown.Item>
                                        </Dropdown.Menu> <Button variant="outline-danger">Remove</Button> 
                                    </Dropdown>
                            </Card.Footer>
                        </Card>
                    </Col>
                ))}
                </Row><br />
                {/*<h2>Manage your job applications below!</h2><br />*/}
                {/*<Manager applications={this.state.applications} />*/}
            </Container>
        );
    }
}

export default Profile;