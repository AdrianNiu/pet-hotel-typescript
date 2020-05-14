import React, { Component } from 'react'
import mapStoreToProps from '../../redux/mapStoreToProps';
import { connect } from 'react-redux'; 


import './PetTable.css';
import { Table } from 'reactstrap';

class PetTable extends Component {

    componentDidMount() {
        this.props.dispatch({ type: 'GET_PETS' });
    }

    deleteEntry = (id) => {
        console.log('In deleteEntry', id);
        this.props.dispatch({ type: 'DELETE_PET', payload: {pet_id: id}});
    }

    checkIn = (event) => {
    console.log('In checkIn');
    }
    



    render() {
        return (
           
            <div>
                <h1>History</h1>
                <Table> 
                    <thead>
                        <tr>
                            <th>Owner</th>
                            <th>Pet</th>
                            <th>Breed</th>
                            <th>Color</th>
                            <th>Checked in</th>
                            <th></th>
                        </tr>
                    </thead>

                    <tbody>
                        
                        {this.props.store.petReducer.map(pet => <tr key={pet.id}>
                        <td></td>
                        <td>{pet.pet_name}</td>
                        <td>{pet.pet_breed}</td>
                        <td>{pet.pet_color}</td>
                        {pet.check_in ? 
                        <td>Yes</td>
                        :
                        <td>No</td>
                        }
                        <td><button type="button" onClick={(event) => this.checkIn(pet)}>Check-In</button><div className="divider"/><button type="button" onClick={() => this.deleteEntry(pet.id)}>Delete</button></td>
                        </tr>)}
                    </tbody>
                </Table> 
            </div>
        )
    }
}

export default connect(mapStoreToProps)(PetTable);
