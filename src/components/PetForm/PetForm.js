import React, { Component } from 'react';

import { Button, Form, FormGroup, Input,} from 'reactstrap';

import { connect } from 'react-redux'; 

import mapStoreToProps from '../../redux/mapStoreToProps';


class PetForm extends Component{

    state = {
        name: '',
        color: '',
        breed: '',
        owner: '',
    }
    
    handleSubmit = () => {
        console.log('in handleSubmit');

        this.props.dispatch({
            type: 'POST_PET', payload: this.state
        })
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
                    <h2>Add Pet</h2>
                <FormGroup>
                    <Input placeholder="Pet" onChange={(event) => { this.handleChange(event, 'name') }}></Input>
                    <Input placeholder="Pet Color" onChange={(event) => { this.handleChange(event, 'color') }}></Input>   
                    <Input placeholder="Pet Breed" onChange={(event) => { this.handleChange(event, 'breed') }}></Input>
                    <Input placeholder="Owner Name" onChange={(event) => { this.handleChange(event, 'owner') }}></Input>
                    <Button type="submit">Submit</Button>
                </FormGroup> 
            </Form>


            </>
        );
    }
}



export default connect(mapStoreToProps)(PetForm);