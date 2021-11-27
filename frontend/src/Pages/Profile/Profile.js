import React from 'react'
import './Profile.css'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import logoURL from '../../Assets/defaultProfilePic.png'

class Profile extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            user: {
                name: "Jane Doe",

            }
        }
    }

    render(){
        return(
            <Container fluid>
                <br />
                <Image align-item="center" src={logoURL} roundedCircle/>
                <h1 align="center">{this.state.user.name}</h1>
            </Container>
        );
    }
}

export default Profile;