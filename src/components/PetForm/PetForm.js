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
        errorMessage: ''
    };
  
    

    handleSubmit = () => {
        console.log('in handleSubmit');
        if((this.state.name === '') || (this.state.color === '') || (this.state.breed === '') || (this.state.owner === '')){
            console.log('missing data!');
            this.setState({
                errorMessage:  'Please Fill in all attributes of your pet'
            })
 
        }else{
            this.props.dispatch({
                type: 'POST_PET', payload: this.state
            });
            this.setState({
                name: '',
                color: '',
                breed: '',
                owner: '',
        });
        }

    }

    handleOwnerChange = (event) => {
        this.setState({owner: event.target.value, errorMessage: ''});
        
    }
    handleChange =(event, propertyName) => {

        this.setState({
            [propertyName]: event.target.value, errorMessage: ''
        })
        
    }

    
    render(){
        
        return(
            <>
            <Form onSubmit={this.handleSubmit} inline>
                    <h2>Add Pet</h2>
                <FormGroup>
                    <Input type="select" value={this.state.value} onChange={this.handleOwnerChange}>
                        <option value=''>
                            Choose an owner
                        </option>
                        {this.props.store.ownerReducer && this.props.store.ownerReducer.map(item => (
                        <option key={item.id} value={item.id}>
                            {item.username}
                        </option>
                ))} 
                    </Input>
                    <Input placeholder="Pet" onChange={(event) => { this.handleChange(event, 'name') }}></Input>
                    <Input placeholder="Pet Color" onChange={(event) => { this.handleChange(event, 'color') }}></Input>   
                    <Input placeholder="Pet Breed" onChange={(event) => { this.handleChange(event, 'breed') }}></Input>
                    <Button id="petFormSubmit" type="submit">Submit</Button>
                    <p style={{color: "red"}}>{this.state.errorMessage}</p>
                </FormGroup> 
            </Form>


            </>
        );
    }
}



export default connect(mapStoreToProps)(PetForm);