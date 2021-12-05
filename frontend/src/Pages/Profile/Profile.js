import React from 'react'
import './Profile.css'
import Image from 'react-bootstrap/Image'
// import Manager from '../Manager/Manager'
import logoURL from '../../Assets/defaultProfilePic.png'
import {  Button, Badge, Card, Container, Dropdown, Row, Col} from "react-bootstrap"
import axios from 'axios';
import config from '../../config'
import Popup from '../../Components/Popup/Popup'
import Loading from '../../Components/Loading/Loading'

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
            isMount: false,
            message: "",
            loading: null, 
        }
        this.updateStatus = this.updateStatus.bind(this);
        this.deleteApplcation = this.deleteApplcation.bind(this);
    }

    async getData(){
        this.setState({loading: true});
        return await axios.get(`${PROFILE_URL}`,
        {
            params:{
                username: this.state.username,
            }
        })
    }
	componentDidMount(){
        
        // Get user's information and their applications
        if (!this.isMount){
            this.getData().then(response => {
                this.setState({loading: false})
                if (response.status === 200){
                    this.setState({isMount: true})
                    this.setState({data: response.data});
                    this.setState({email: response.data.email});
                    this.setState({applications: response.data.applications})
                    console.log(this.state.applications);
                } else {
                    this.setState({message: response.data});
                    console.log(response);
                }
            }).catch((err) => {
                this.setState({message: err})
            })
        } else {
            this.setState({message: "Mount was not correctly handled"})
        }
	};

    async changeStatus(id, name){
        this.setState({loading: true})
        return await axios.put( `${APPLICATION_URL}`, {
            username: this.state.username,
            postID: id, 
            status: name, 
        })
    }
    updateStatus(event){
        this.changeStatus(event.target.id, event.target.name).then((response) => {
            this.setState({loading: false})
            console.log(response);
            const message = response.data.Status + " - Status successfully changed!"
            this.setState({message: message})
        }).catch((err) => { 
            console.log(err);
        })
    }

    async removeApplication(id){
        this.setState({loading: true})
        return await axios.delete(`${APPLICATION_URL}`, 
            {params: {
            username: this.state.username,
            postID: id,
            }
        })
    }

    deleteApplcation(event){
        this.removeApplication(event.target.id).then((response) => {
            this.setState({loading: false})
            this.setState({message: response.data.Status})
            console.log(response)
        }).catch((err) => {
            this.setState({message: err})
        })
    }
    render(){
        if (this.state.loading){
            return (
                <Loading loading={this.state.loading}></Loading>
            );
        } else {
            return(
                
                <Container className="me-auto">
                    {this.state.message && <Popup message = {this.state.message} history={this.props.history} pageChange="/profile" page = "Profile" />}
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
                                                <Dropdown.Item id={listings.postID} name="Saved" onClick= {this.updateStatus}>Saved</Dropdown.Item>
                                                <Dropdown.Item id={listings.postID} name="Applied" onClick = {this.updateStatus}>Applied</Dropdown.Item>
                                                <Dropdown.Item id={listings.postID} name="Interview" onClick = {this.updateStatus}>Interviewing</Dropdown.Item>
                                                <Dropdown.Item id={listings.postID} name="Done" onClick = {this.updateStatus}>Done</Dropdown.Item>
                                            </Dropdown.Menu> <Button id = {listings.postID} onClick={this.deleteApplcation} variant="outline-danger">Remove</Button> 
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
}

export default Profile;