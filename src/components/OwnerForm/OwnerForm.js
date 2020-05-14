import React, { Component } from 'react';

import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

import { Button, Form, FormGroup, Input, } from 'reactstrap';


class OwnerForm extends Component{

    state = {
        username: '',
        password: ''
    }
    
    handleSubmit = (e) => {
        e.preventDefault()
        console.log('in handleSubmit');
        this.props.dispatch({type:'ADD_OWNER', payload:{
            username:this.state.username,
            password:this.state.password
        }})  
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

export default connect (mapStoreToProps)(OwnerForm);