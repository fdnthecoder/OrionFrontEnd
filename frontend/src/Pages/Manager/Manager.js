import React, { useState } from 'react';
import {Row, Col, Card, ListGroup} from 'react-bootstrap';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const hardcodedApps = [
    {
        "postId": 0,
        "status": "applied",
        "company": "google",
        "title": "Software Engineering Intern, Bachelor's, Summer 2022",
        "url": "https://careers.google.com/jobs/results/115615177363071686-software-engineering-intern-bachelors-summer-2022/?utm_campaign=google_jobs_apply&utm_medium=organic&utm_source=google_jobs_apply"
    },
    {
        "postId": 1,
        "status": "saved",
        "company": "google",
        "title": "Software Engineering Intern PhD Summer 2022",
        "url": "https://www.jobilize.com/amp/job/software-engineering-intern-phd-summer-2022-madison-google-united?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic"
    }
];

const Manager = (props) => {
    const [applications, updateApplications] = useState(hardcodedApps)
    function handleOnDragEnd(result) {
        if (!result.destination) return;
    
        const items = Array.from(props.applications);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);
    
        updateApplications(items);
      }
    return(
        <DragDropContext onDropEnd={handleOnDragEnd}>
            <Row xs={1} md={2} className="g-4">
            <Col>
            <h2>Interested</h2>
            <Droppable droppableId="interested">
                {(provided) => (
                    <ListGroup className="interested" {...provided.droppableProps} ref={provided.innerRef}>
                    { applications.map(applications => {
                            return (
                              <Draggable key={"draggable"+ applications.postId} draggableId={"interested-job"+ applications.postId} index={applications.postId}>
                                {(provided) => (
                                  <Card key={"job"+ applications.postId}ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                    <Card.Title key={"title"+applications.postId}>{applications.title}</Card.Title>
                                    <Card.Body key={"body"+applications.postId}>{applications.url}</Card.Body>
                                    <Card.Footer key={"status"+applications.postId}>{applications.status}</Card.Footer>
                                  </Card>
                                )}
                              </Draggable>
                            );
                          })}
                          {provided.placeholder}
                        </ListGroup>
                      )}    
            </Droppable>
            </Col>
            <Col>
            <h2>Applied</h2>
            <Droppable droppableId="applied">
                    {(provided) => (
                        <ListGroup className="applied" {...provided.droppableProps} ref={provided.innerRef}>
                        { applications.map(applications => {
                                return (
                                <Draggable key={"draggable"+ applications.postId} draggableId={"applied-job"+ applications.postId} index={applications.postId}>
                                    {(provided) => (
                                    <Card key={"job"+ applications.postId}ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                        <Card.Title key={"title"+applications.postId}>{applications.title}</Card.Title>
                                        <Card.Body key={"body"+applications.postId}>{applications.url}</Card.Body>
                                        <Card.Footer key={"status"+applications.postId}>{applications.status}</Card.Footer>
                                    </Card>
                                    )}
                                </Draggable>
                                );
                            })}
                            {provided.placeholder}
                            </ListGroup>
                        )}    
            </Droppable>
            </Col>
            </Row>
        </DragDropContext>
    );
}

export default Manager