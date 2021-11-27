import React from 'react'
import './Profile.css'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import logoURL from '../../Assets/defaultProfilePic.png'
import axios from 'axios'

class Profile extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            name:"",
            username:"diallodb",
            email:"",
        };
        this.getProfile = this.getProfile.bind(this);
        
    }

    getProfile(event){
        axios.get( "http://127.0.0.1:8000/profile", {
            username: this.state.username,
        }).then((response) => {
            this.setState({name:response.data.name, email:response.data.email});
            console.log(response)
        }).catch((err) => {
            console.log(err);
        })
    };

    render(){
        return(
            <Container fluid>
                {this.getProfile}
                <br />
                <Image src={logoURL} roundedCircle/>
                <h1>{this.state.name}</h1>
                <h2>{this.state.username}</h2>
                <h2>{this.state.email}</h2>
            </Container>
        );
    }
}

export default Profile;