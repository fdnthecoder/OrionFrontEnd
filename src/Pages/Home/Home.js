import React from 'react'
import Container from 'react-bootstrap/Container'
import Card from "react-bootstrap/Card"
import backgroundURL from "../../Assets/background.jpg"
//import Carousel from 'react-bootstrap/Carousel'

class Home extends React.Component{
    render(){
        return(
            <Container className="me-auto">
                <Card className="bg-dark text-white">
                    <Card.Img src={backgroundURL} alt="Card image" />
                    <Card.ImgOverlay>
                        <Card.Title>Who we are</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </Card.Text>
                        <Card.Text>Last updated 3 mins ago</Card.Text>
                    </Card.ImgOverlay>
                </Card>
            </Container>
        );
    }
}

export default Home;