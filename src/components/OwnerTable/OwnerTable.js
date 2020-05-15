import React, {Component} from 'react';

import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

import { Table, Button } from 'reactstrap';



class OwnerTable extends Component {

    

    deleteEntry = (id) => {
        console.log('In deleteEntry')
        this.props.dispatch({ type: 'DELETE_OWNER', payload: {id} })
    }


    render(){
        return(
            <>
            <h1>Owner List</h1>
            <Table>
                <tr>
                    <th>Name</th>
                    <th>Number of Pets</th>
                    <th>Actions</th>
                </tr>

                <tbody>
                {this.props.store.ownerReducer && this.props.store.ownerReducer.map(item => <tr key={item.id}>
                        <td>{item.username}</td>
                        <td>{item.number_of_pets}</td>

                        <td>
                        {(item.number_of_pets == 0) && <Button type="button" onClick={() => this.deleteEntry(item.id)}>Delete</Button>}
                        </td>

                        </tr>)}
                </tbody>

            </Table>

            </>
        );
    }
}



export default (connect(mapStoreToProps)(OwnerTable));