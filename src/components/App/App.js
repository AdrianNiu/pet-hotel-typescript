import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { connect } from 'react-redux';

import PetForm from '../PetForm/PetForm';
import PetTable from '../PetTable/PetTable';

class App extends Component {
  componentDidMount() {
    this.props.dispatch({ type: 'GET_SAMPLE_API_CALL' });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Pet Hotel</h1>
        </header>
        <PetForm />
        <PetTable />
      </div>
    );
  }
}

export default connect(mapStoreToProps)(App);
