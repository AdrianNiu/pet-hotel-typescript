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

    handleOwnerChange = (event) => {
        this.setState({owner: event.target.value});
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


{JSON.stringify(this.props.store.ownerReducer)}

            <Form onSubmit={this.handleSubmit} inline>
                    <h2>Add Pet</h2>
                <FormGroup>
                
                    
                    {JSON.stringify(this.props.store.ownerReducer)}
                    {JSON.stringify(this.state)}
                    <select value={this.state.value} onChange={this.handleOwnerChange}>
                    {this.props.store.ownerReducer && this.props.store.ownerReducer.map(item => (
                        <option value={item.id}>
                            {item.username}
                        </option>
                ))} 
                    </select>
                    <Input placeholder="Pet" onChange={(event) => { this.handleChange(event, 'name') }}></Input>
                    <Input placeholder="Pet Color" onChange={(event) => { this.handleChange(event, 'color') }}></Input>   
                    <Input placeholder="Pet Breed" onChange={(event) => { this.handleChange(event, 'breed') }}></Input>
                    <Button type="submit">Submit</Button>
                </FormGroup> 
            </Form>


            </>
        );
    }
}



export default connect(mapStoreToProps)(PetForm);