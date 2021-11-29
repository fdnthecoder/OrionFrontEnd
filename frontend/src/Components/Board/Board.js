import React, { useState } from "react"
import { useHistory } from "react-router";
import { Button, Card, Container, Row, Col} from "react-bootstrap"

const Board = (props) => {
    const history = useHistory();
    
    return(
        <Container fluid>
            <Row xs={1} md={2} className="g-4">
            {props.data.map(listings => (
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