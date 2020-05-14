import React, {Component} from 'react';

class OwnerTable extends Component {

    state = [{
        name: 'Frieda',
    }]

    render(){
        return(
            <>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Number of Pets</th>
                    <th>Actions</th>
                </tr>
                <tr>
                    <td>
                        Frieda
                    </td>
                    <td>
                        5
                    </td>
                    <td>
                        <button>Delete</button>
                    </td>
                </tr>
            </table>
            </>
        );
    }
}

export default OwnerTable;