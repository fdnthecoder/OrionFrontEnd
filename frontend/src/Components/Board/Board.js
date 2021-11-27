import React, { useState } from "react"
import { useHistory } from "react-router";
import { Button, Card, Container, Row, Col} from "react-bootstrap"

const Board = () => {
    const history = useHistory();
    const [listings, setListings] = useState(
        [
            {
                id: 0,
                jobName : "Software Engineer @ AWS",
                jobDesc : "Some stuff that software engineers at AWS"
            },
            {
                id: 1,
                jobName : "Data Engineer @ AWS",
                jobDesc : "Seriously, like what even do these people do lmao"
            }
        ]
    );
    
    return(
        <Container fluid>
            <Row xs={1} md={2} className="g-4">
            {listings.map(listings => (
                <Col key={"col" + listings.jobName}>
                    <Card key={"entry" + listings.jobName} >
                        <Card.Body key={"body" + listings.jobName}>
                        <Card.Title key={"title" + listings.jobName}>{listings.jobName}</Card.Title>
                        <Card.Text key={"text" + listings.jobName} >
                            {listings.jobDesc}
                        </Card.Text>
                        <Button onClick={() => history.push({pathname: '/post/' + listings.id, state: listings})} variant="outline-success"> View </Button>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
            </Row>
        </Container>
    );
}

export default Board;