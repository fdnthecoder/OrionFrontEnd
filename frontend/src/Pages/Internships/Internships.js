import React from "react"
import Board from "../../Components/Board/Board"
import Container from "react-bootstrap/Container"
import axios from "axios";
import config from '../../config'
import Loading from "../../Components/Loading/Loading";
import Popup from "../../Components/Popup/Popup";

const JOB_LISTINGS_URL = config.JOB_LISTINGS_URL;

class Internships extends React.Component{
    /*
    Displaying list of job listings 
    */
   
    constructor(props){
        super(props);
        this.state = {
            jobList: [],
            loading: false,
            message: "",
        }
    }

    async getJobs(){
        this.setState({loading: true})
        return await axios.get(`${JOB_LISTINGS_URL}`)
    }

    componentDidMount(){
        this.getJobs().then((response) => {
            this.setState({loading: false});
            console.log(response.data);
            this.setState({jobList: response.data});
        }).catch((err) => {
            this.setState({message: err})
        })
    }
    render(){
        if (this.state.loading){
            return (
                <Loading loading={this.state.loading}></Loading>
            )
        } else{
            return(
                <Container>
                    {this.state.message && <Popup message = {this.state.message} history={this.props.history} pageChange="/profile" page = "Profile" />}
                    <br/ >
                    <Board data={this.state.jobList}/>
                </Container>
            )
        }
    }
}

export default Internships