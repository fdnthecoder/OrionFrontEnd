import {React} from "react"
import {Spinner} from "react-bootstrap"

const Loading = () => {

    const style =  { 
        position: "fixed", 
        top: "50%", 
        left: "50%",  
    }

    
    return(
        <Spinner animation="grow" variant="primary" style= {style}></Spinner>
    );
}

export default Loading;