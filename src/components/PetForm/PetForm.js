import React, { Component } from 'react';

class PetForm extends Component{

    state = {
        name: '',
        color: '',
        breed: '',
        owner: '',
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
            <form onSubmit={this.handleSubmit}>
                <h2>Add Pet</h2>
                <input placeholder="Pet" onChange={(event) => {this.handleChange( event, 'name')}}></input>
                <input placeholder="Pet Color" onChange={(event) => { this.handleChange(event, 'color') }}></input>
                <input placeholder="Pet Breed" onChange={(event) => { this.handleChange(event, 'breed') }}></input>
                <input placeholder="Owner Name" onChange={(event) => { this.handleChange(event, 'owner') }}></input>
                <button type="submit">Submit</button>
            </form>
            </>
        );
    }
}

export default PetForm;