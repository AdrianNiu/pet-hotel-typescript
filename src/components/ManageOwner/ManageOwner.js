import React, { Component } from 'react';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { connect } from 'react-redux';


import OwnerTable from '../OwnerTable/OwnerTable';
import OwnerForm from '../OwnerForm/OwnerForm';


class ManageOwner extends Component {
  componentDidMount() {
    this.props.dispatch({ type: 'GET_OWNERS' });
  }

  render() {
    return (
      <>
        <h1>Manage Owner</h1>
        <div>
        <OwnerForm />
        <OwnerTable />
      </div>
      </>

    );
  }
}

export default connect(mapStoreToProps)(ManageOwner);
