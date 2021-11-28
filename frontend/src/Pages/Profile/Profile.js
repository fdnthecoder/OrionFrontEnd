import React from 'react'
import './Profile.css'
import Image from 'react-bootstrap/Image'
import logoURL from '../../Assets/defaultProfilePic.png'
import { Container} from "react-bootstrap"
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
                    data: response.data,
                    email: this.data.email,
                    applications: this.data.username,
                })
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
                <h1>Tester: {this.data.email}</h1>
                <h1>Tester applications: {this.data.applications}</h1>
                {/* <Row xs={1} md={2} className="g-4">
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
                </Row> */}
            </Container>
        );
    }
}

export default Profile;