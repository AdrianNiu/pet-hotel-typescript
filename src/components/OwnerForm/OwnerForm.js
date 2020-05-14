import React, { Component } from 'react';
import { Button, Form, FormGroup, Input, } from 'reactstrap';

class OwnerForm extends Component{

    state = {
        username: '',
        password: '',
    }
    
    handleSubmit = () => {
        console.log('in handleSubmit');
    }

    handleChange =(event, propertyName) => {
        console.log( 'in handleChange', propertyName, event.target.value);
        
        this.setState({
            [propertyName]: event.target.value
        })

    }

    render(){

        return(
            <>
            <Form onSubmit={this.handleSubmit} inline>
                <FormGroup>
                <h2>Add Owner</h2>
                <Input placeholder="Owner Name" onChange={(event) => {this.handleChange( event, 'username')}}></Input>
                <Input placeholder="Password" onChange={(event) => { this.handleChange(event, 'password') }}></Input>
                <Button type="submit">Submit</Button>
                </FormGroup>
            </Form>
            </>
        );
    }
}

export default OwnerForm;