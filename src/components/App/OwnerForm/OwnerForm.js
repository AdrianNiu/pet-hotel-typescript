import React, { Component } from 'react';

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
            <form onSubmit={this.handleSubmit}>
                <h2>Add Owner</h2>
                <input placeholder="Owner Name" onChange={(event) => {this.handleChange( event, 'username')}}></input>
                <input placeholder="Password" onChange={(event) => { this.handleChange(event, 'password') }}></input>
                <button type="submit">Submit</button>
            </form>
            </>
        );
    }
}

export default OwnerForm;