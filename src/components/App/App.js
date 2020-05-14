import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { connect } from 'react-redux';

import PetForm from '../PetForm/PetForm';
import PetTable from '../PetTable/PetTable';
import OwnerTable from '../OwnerTable/OwnerTable';


class App extends Component {
  componentDidMount() {
    this.props.dispatch({ type: 'GET_OWNERS' });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Pet Hotel</h1>
        </header>
        {JSON.stringify(this.props.store.ownerReducer)}
        <PetForm />
        <PetTable />
        <OwnerTable />

      </div>
    );
  }
}

export default connect(mapStoreToProps)(App);
