import React from "react"
import {Row, Col} from "react-bootstrap"
import Card from "react-bootstrap/Card"
import Container from "react-bootstrap/Container"

class Board extends React.Component{
    render(){
        return(
            <Container fluid>
                <Row xs={1} md={2} className="g-4">
                {Array.from({ length: 4 }).map((_, idx) => (
                    <Col>
                        <Card>
                            <Card.Body>
                            <Card.Title>Sample Job Opening</Card.Title>
                            <Card.Text>
                                Sample description for possible internship
                            </Card.Text>
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