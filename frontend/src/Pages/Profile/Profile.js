import React from 'react'
import './Profile.css'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import logoURL from '../../Assets/defaultProfilePic.png'
import axios from 'axios';

class Profile extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: "qadriid",
            email: "",
            data:[],
        }
    }

	componentDidMount(){
		axios.get( "https://orion-crepe.herokuapp.com/profile",
        {
            params:{
                username: this.state.username,
            }
        }).then(response => {
			this.setState({
                data: response.data,
            })
            console.log(response.data);
		}).catch((err) => {
            console.log(err);
        })
	};


    render(){
        return(
            <Container fluid>
                <br />
                <Image src={logoURL} roundedCircle/>
                <body>{this.state.data}</body>
            </Container>
        );
    }
}

export default Profile;