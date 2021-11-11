import React from 'react'
import  { Image, Carousel, Container } from 'react-bootstrap'
import bannerURL from "../../Assets/banner.jpg"
import backgroundURL from "../../Assets/background.jpg"

class Home extends React.Component{
    render(){
        return(
            <Container className="me-auto">
                <Carousel fade className="bg-dark text-white">
                    <Carousel.Item>
                        <Image width="100%" height="250px" src={bannerURL} alt="background"/>
                        <Carousel.Caption>
                            <h3>Our mission</h3>
                            <p>Connecting users to their internship through the stars</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image width="100%" height="250px" src={backgroundURL} alt="background"/>
                        <Carousel.Caption>
                            <h3>Our mission</h3>
                            <p>Connecting users to their internship through the stars</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Container>
        );
    }
}

export default Home;