import React from 'react'
import './Profile.css'
import Image from 'react-bootstrap/Image'
import logoURL from '../../Assets/defaultProfilePic.png'
import { Card, Container, Row, Col} from "react-bootstrap"
import axios from 'axios';

class Profile extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            username: "qadriid",
            email: "",
            applications:[],
            data:[],
            isMount: false, 
        }
    }

	componentDidMount(){
        this.setState({isMount:true})
		axios.get( "https://orion-crepe.herokuapp.com/profile",
        {
            params:{
                username: this.state.username,
            }
        }).then(response => {
            console.log(response.data);
            if (this.isMount){
                this.setState({
                    email: response.data.email,
                    applications: response.data.applications,
                    data: response.data,
                })
                console.log(response.data.email);
                console.log(response.data.applications)
                console.log(response.data);
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
                <p> applications : {this.state.applications}</p>
                <Row xs={1} md={2} className="g-4">
                {this.applications.map(listings => (
                    <Col key={"col" + listings.jobName}>
                        <Card key={"entry" + listings.jobName} >
                            <Card.Body key={"body" + listings.jobName}>
                            <Card.Title key={"title" + listings.jobName}>{listings.jobName}</Card.Title>
                            <Card.Text key={"text" + listings.jobName} >
                                {listings.jobDesc}
                            </Card.Text>
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