import React from "react"
import Board from "../../Components/Board/Board"
import Container from "react-bootstrap/Container"
import axios from "axios";
import config from '../../config'

const JOB_LISTINGS_URL = config.JOB_LISTINGS_URL;

class Internships extends React.Component{
    /*
    Things to add (from highest to lowest priority)
    - receiving a list of data from backend
    - displaying list on our board (will need to pass as a prop) 
    */
   
    constructor(props){
        super(props);
        this.state = {
            jobList: []
        }
    }

    componentDidMount(){
        axios.get(`${JOB_LISTINGS_URL}`).then((response) => {
            console.log(response.data);
            this.setState({jobList: response.data});
        }).catch((err) => {
            console.log(err)
        })
    }
    render(){
        return(
            <Container>
                <br/ >
                <Board data={this.state.jobList}/>
            </Container>
        )
    }
}

export default Internships