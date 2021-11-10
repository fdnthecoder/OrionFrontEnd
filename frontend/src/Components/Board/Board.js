import React from "react"
import {Row, Col} from "react-bootstrap"
import Card from "react-bootstrap/Card"
import Container from "react-bootstrap/Container"

class Board extends React.Component{
    render(){
        return(
            <Container fluid>
                <Row xs={1} md={2} className="g-4">
                {Array.from({ length: 8 }).map((_, idx) => (
                    <Col key={"col" + idx.toString()}>
                        <Card border="dark" key={"entry" + idx.toString()}>
                            <Card.Body key={"body" + idx.toString()}>
                            <Card.Title key={"title" + idx.toString()}>Sample Job Opening</Card.Title>
                            <Card.Text key={"text" + idx.toString()}>
                                Sample description for possible internship
                            </Card.Text>
                            <Card.Footer key={"footer" + idx.toString()}>
                                Posted by Sample Recruiter {idx + 1}
                            </Card.Footer>
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