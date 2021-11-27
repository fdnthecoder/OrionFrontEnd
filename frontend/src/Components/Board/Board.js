import React from "react"
import { Button, Card, Container, Row, Col} from "react-bootstrap"

class Board extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            listings: [
                {
                    id: 0,
                    jobName : "Software Engineer @ AWS",
                    jobDesc : "Some stuff that software engineers at Amazon Web Services would do I guess"
                },
                {
                    id: 1,
                    jobName : "Data Engineer @ AWS",
                    jobDesc : "Seriously, like what even do these people do lmao"
                }
            ]
        };
    }

    render(){
        return(
            <Container fluid>
                <Row xs={1} md={2} className="g-4">
                {this.state.listings.map(listings => (
                    <Col key={"col" + listings.jobName}>
                        <Card key={"entry" + listings.jobName} >
                            <Card.Body key={"body" + listings.jobName}>
                            <Card.Title key={"title" + listings.jobName}>{listings.jobName}</Card.Title>
                            <Card.Text key={"text" + listings.jobName} >
                               {listings.jobDesc}
                            </Card.Text>
                            <Button variant="outline-success"> View </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
                </Row>
            </Container>
        )
    }
}

export default Board;