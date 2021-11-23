import React from "react"
import Board from "../../Components/Board/Board"
import Container from "react-bootstrap/Container"

class Internships extends React.Component{
    /*
    Things to add (from highest to lowest priority)
    - receiving a list of data from backend
    - displaying list on our board (will need to pass as a prop) 
    */
    render(){
        return(
            <Container>
                <br/ >
                <Board data=""/>
            </Container>
        )
    }
}

export default Internships