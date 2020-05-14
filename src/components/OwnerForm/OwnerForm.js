import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

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

export default connect (mapStoreToProps)(OwnerForm);