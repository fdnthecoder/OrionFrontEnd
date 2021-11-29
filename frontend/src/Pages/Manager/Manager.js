import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const Manager = (props) => {
    const [applications, updateApplications] = useState(props.applications)
    function handleOnDragEnd(result) {
        if (!result.destination) return;
    
        const items = Array.from(props.applications);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);
    
        updateApplications(items);
      }
    return(
        <DragDropContext onDropEnd={handleOnDragEnd}>
            <Droppable droppableId="interested">
                {(provided) => (
                    <ul className="interested" {...provided.droppableProps} ref={provided.innerRef}>
                    { applications.map(applications => {
                            return (
                              <Draggable key={applications.jobName} draggableId={applications.jobName} index={applications.jobDesc}>
                                {(provided) => (
                                  <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                    <p>
                                      owo
                                    </p>
                                  </li>
                                )}
                              </Draggable>
                            );
                          })}
                          {provided.placeholder}
                        </ul>
                      )}    
                    </Droppable>
                  </DragDropContext>
    );
}

export default Manager