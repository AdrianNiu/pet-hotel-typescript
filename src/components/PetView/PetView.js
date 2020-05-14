import React, { Component } from 'react';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { connect } from 'react-redux';

import PetForm from '../PetForm/PetForm';
import PetTable from '../PetTable/PetTable';


class PetView extends Component {
  componentDidMount() {
    this.props.dispatch({ type: 'GET_OWNERS' });
  }

  render() {
    return (
        <>
        <h1>Pet View</h1>
      <div>
        <PetForm />
        <PetTable />
      </div>
      </>
    );
  }
}

export default connect(mapStoreToProps)(PetView);
