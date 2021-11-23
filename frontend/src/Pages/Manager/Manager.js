import React from 'react';
import { Container } from 'react-bootstrap';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

class Manager extends React.Component{
    render() {
        return(
            <DndProvider backend={HTML5BBackend}>
                <Container>
                    <div>In progress</div>
                </Container>
                <Container>
                    <div>Interviewing for</div>
                </Container>
                <Container>
                    <div>Complete</div>
                </Container>
            </DndProvider>
        )
    }
}

export default Manager