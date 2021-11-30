import React from 'react'
import  { Image, Carousel, Container } from 'react-bootstrap'
import bannerURL from "../../Assets/banner.jpg"
import backgroundURL from "../../Assets/background.jpg"
import aboutURL from "../../Assets/aboutImage.jpg"

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
                <Container className="me-auto" style={{padding: "20px", display: "flex", justifyContent: "center"}}>
                    <Container>
                        <h1 style={{padding: "20px", textAlign: "center"}}>Who we are</h1>
                        <p style={{fontSize: "14pt"}}>
                           Orion is a product started up by students in search of a way to streamline the application process for internships and jobs. The intention is to organize data that job hunters would normally have trouble organizing through the use of spreadsheets in a more simpleer and aesthetically pleasing through the use of React and React-Bootstrap.   
                        </p>
                    </Container>
                    <Image style={{maxWidth: "40rem", paddingLeft: "20px"}} src={aboutURL} alt="aboutImage" />
                </Container>
            </Container>
        );
    }
}

export default Home;