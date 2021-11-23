import React from "react"
import Board from "../../Components/Board/Board"
import Container from "react-bootstrap/Container"

class Internships extends React.Component{
    /*
    Things to add (from highest to lowest priority)
    - receiving a list of data from backend
    - displaying list on our board (will need to pass as a prop) 
    */

    constructor (props){
        super(props);
        this.state = {
            email: "", 
            password: ""
        };
        this.changeEmail = this.changeEmail.bind(this);
        this.changePassword = this.changePassword.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    
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