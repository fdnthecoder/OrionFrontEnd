import React from 'react'
import './Profile.css'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import logoURL from '../../Assets/defaultProfilePic.png'
import axios from 'axios'

class Profile extends React.Component{
<<<<<<< HEAD
    constructor(props){
        super(props);
        this.state = {
            user: {
                name: "Jane Doe",

            }
        }
    }

=======
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

>>>>>>> 86639c31e0b7911efe7956f6c8532b7498a71254
    render(){
        return(
            <Container fluid>
                {this.getProfile}
                <br />
<<<<<<< HEAD
                <Image align-item="center" src={logoURL} roundedCircle/>
                <h1 align="center">{this.state.user.name}</h1>
=======
                <Image src={logoURL} roundedCircle/>
                <h1>{this.state.name}</h1>
                <h2>{this.state.username}</h2>
                <h2>{this.state.email}</h2>
>>>>>>> 86639c31e0b7911efe7956f6c8532b7498a71254
            </Container>
        );
    }
}

export default Profile;