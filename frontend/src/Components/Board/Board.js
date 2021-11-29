import React from "react"
import { useHistory } from "react-router";
import { Badge, Button, Card, Container, Row, Col} from "react-bootstrap"

const Board = (props) => {
    const history = useHistory();
    
    return(
        <Container fluid>
            <Row xs={1} md={2} className="g-4">
            {props.data.map(listings => (
                <Col key={"col" + listings.postId}>
                    <Card key={"entry" + listings.postId} >
                        <Card.Header key={"company" + listings.company}>
                            <Card.Title><Badge pill bg="success">{listings.company}</Badge> <Badge pill bg="dark">{listings.level}</Badge></Card.Title>
                        </Card.Header>
                        <Card.Body key={"body" + listings.postId}>
                            <Card.Title key={"title" + listings.title}>{listings.title}</Card.Title>
                            <Card.Link href={listings.url} key={"link" + listings.url}>View official job listing</Card.Link>
                            <Card.Text key={"text" + listings.description} >
                                {listings.description}
                            </Card.Text>
                            <Button onClick={() => history.push({pathname: '/post/' + listings.postId, state: listings})} variant="outline-success"> View </Button>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
            </Row>
        </Container>
    );
}

export default Board;