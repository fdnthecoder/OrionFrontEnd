import React from 'react'
import { Button, Form, Container } from 'react-bootstrap'
import axios from 'axios'
import config from '../../config'

const JOB_LISTINGS_URL = config.JOB_LISTINGS_URL;
class PostInternships extends React.Component{
    constructor (props){
        super(props);
        this.state = {
            name: "", 
            company: "",
            level: "",
            url: "",
            description: "",
        };
        this.updateName = this.updateName.bind(this);
        this.updateCompany = this.updateCompany.bind(this);
        this.updateUrl = this.updateUrl.bind(this);
        this.updateDescrition = this.updateDescrition.bind(this);
        this.updateLevel = this.updateLevel.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    updateName(event) {
        this.setState({name: event.target.value});
    }

    updateCompany(event) {
        this.setState({company: event.target.value});
    }

    updateUrl(event) {
        this.setState({url: event.target.value});
    }

    updateDescrition(event) {
        this.setState({description: event.target.value});
    }

    updateLevel(event) {
        this.setState({level: event.target.value});
    }
    onClick(event){
        event.preventDefault();
        axios.post(`${JOB_LISTINGS_URL}`, {
            name: this.state.name,
            company: this.state.company, 
            level: this.state.level,
            url: this.state.url, 
            description: this.state.description,
        }).then((response) => {
            console.log(response.data);
            this.setState({
                name: "",
                company: "",
                level: "",
                url: "",
                description: "",
            });
        }).catch((err) => {
            console.log(err);
        })
    }
    render() {
        return (
            <Container>
                <br />
                <h1>Post a new job</h1>
                <Form onSubmit={this.onClick}>
                    <Form.Group>
                        <Form.Label>
                            Name
                        </Form.Label>
                        <Form.Control type="input" onChange={this.updateName} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>
                            Company
                        </Form.Label>
                        <Form.Control type="input" onChange={this.updateCompany} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>
                            Level
                        </Form.Label>
                        <Form.Control type="input" onChange={this.updateLevel} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>
                            URL
                        </Form.Label>
                        <Form.Control type="url" onChange={this.updateUrl}  />
                    </Form.Group>
                    <br />
                    <Form.Group>
                        <Form.Label>
                            Description of the Listing
                        </Form.Label>
                        <Form.Control as="textarea" onChange={this.updateDescrition}  />           
                    </Form.Group>
                    <br />
                    <Button variant="outline-success" type="submit">
                        Post new listing
                    </Button>
                </Form>
            </Container>
        );
    }
}

export default PostInternships;