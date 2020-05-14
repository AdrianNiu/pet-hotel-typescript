import React, {Component} from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';


class OwnerTable extends Component {

    

    deleteEntry = () => {
        console.log('In deleteEntry')
    }


    render(){
        return(
            <>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Number of Pets</th>
                    <th>Actions</th>
                </tr>
                <tbody>
                {this.props.store.ownerReducer && this.props.store.ownerReducer.map(item => <tr key={item.id}>
                        <td>{item.username}</td>
                        {/* <td>{item.number_of_pets}</td> */}
                        </tr>)}
                </tbody>
            </table>
            </>
        );
    }
}



export default (connect(mapStoreToProps)(OwnerTable));