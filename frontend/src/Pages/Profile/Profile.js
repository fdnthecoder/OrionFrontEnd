import React from 'react'
import './Profile.css'
import Image from 'react-bootstrap/Image'
import logoURL from '../../Assets/defaultProfilePic.png'
import {  Card, Container, Row, Col} from "react-bootstrap"
import axios from 'axios';

class Profile extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: "qadriid",
            email: "",
            applications:[],
            data:[],
            isMount: "false",
        }
    }


	componentDidMount(){
        this.isMount = true;
		axios.get(process.env.REACT_APP_BASEURL + "profile",
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
                <br />
                <Image src={logoURL} roundedCircle/>
                <h1>Hello {this.state.username}!</h1>
                <h2>Email: {this.state.email}</h2>
                <Row xs={1} md={2} className="g-4">
                {this.state.applications.map(listings => (
                    <Col key={"col" + listings.postID}>
                        <Card key={"entry" + listings.postID} >
                            <Card.Body key={"body" + listings.status}>
                            <Card.Title key= {"status" + listings.status}> {listings.status} </Card.Title>
                            <Card.Title key={"company" + listings.company}>{listings.company}</Card.Title>
                            <Card.Title key={"title" + listings.title}>{listings.title}</Card.Title>

                            <Card.Link href= {listings.url} key={"url" + listings.url} >
                                {listings.url}
                            </Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
                </Row>
            </Container>
        );
    }
}

export default Profile;