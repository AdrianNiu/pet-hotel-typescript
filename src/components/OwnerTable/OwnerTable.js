import React, {Component} from 'react';
import { Table, Button } from 'reactstrap';


class OwnerTable extends Component {

    state = [{
        name: 'Frieda',
    }]

    render(){
        return(
            <>
            <Table>
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
                        <Button>Delete</Button> 
                    </td>
                </tr>
            </Table>
            </>
        );
    }
}

export default OwnerTable;