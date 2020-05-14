import React, { Component } from 'react';
import './App.css';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { connect } from 'react-redux';
import { HashRouter as Router, Route } from "react-router-dom";

import PetForm from '../PetForm/PetForm';
import PetTable from '../PetTable/PetTable';
import OwnerTable from '../OwnerTable/OwnerTable';
import ManageOwner from '../ManageOwner/ManageOwner';
import PetView from '../PetView/PetView';



class App extends Component {
  componentDidMount() {
    this.props.dispatch({ type: 'GET_OWNERS' });
  }

  render() {
    return (
      <div>
        <Router>
        <div>
          <Route 
            path="/manage"
            component={ManageOwner}
          />
          <Route 
            exact path="/"
            component={PetView}
          />
        </div>
        </Router>
      </div>

    );
  }
}

export default connect(mapStoreToProps)(App);
