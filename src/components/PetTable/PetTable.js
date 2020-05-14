import React, { Component } from 'react'
import './PetTable.css';

class PetTable extends Component {

    deleteEntry = (id) => {
        console.log('In deleteEntry', id);
        this.props.dispatch({ type: 'DELETE_ENTRY', payload: {pet_id: id}});
    }

    checkIn = (event) => {
    console.log('In checkIn');
    }
    



    render() {
        return (
            <div>
                <h1>History</h1>
                <table>
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
                        
                    {this.props.reduxStore.PetTable.map(pet => <tr key={pet.id}>
                        <td>{pet.owner}</td>
                        <td>{pet.pet}</td>
                        <td>{pet.breed}</td>
                        <td>{pet.color}</td>
                        <td>{pet.checkIn}</td>
                        <td><button type="button" onClick={(event) => this.checkIn(pet)}>Check-In</button><div className="divider"/><button type="button" onClick={() => this.deleteEntry(pet.id)}>Delete</button></td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default PetTable
