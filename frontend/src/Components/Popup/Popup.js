import {React, useState, useEffect} from "react";
import {Button, Modal} from 'react-bootstrap';
var closePushed = false;

const Popup = (props) => {
    var message = props.message;
    const [show, setShow] = useState(false);
    const handleClose = () => {
        setShow(false);
        closePushed = true;
        if (message === "Success" || message === "Does exist"){
            console.log("inside if statement")
            props.history.push(props.pageChange);
            window.location.reload(false);
        }
    }
    const handleShow = () => setShow(true);
    useEffect(() => {
        if (message.length > 0 && !closePushed){
            handleShow();
        } 
    });
    return (
        <Modal show={show} onHide={handleClose} size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
            <Modal.Header closeButton>
                <Modal.Title  id="contained-modal-title-vcenter"><h1>{props.page}</h1></Modal.Title>
            </Modal.Header>
            <Modal.Body><h3>{message}</h3></Modal.Body>
            <Modal.Footer>
                <Button variant = "Primary" onClick={handleClose}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default Popup