import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function Covid19data(props) {

    return (

        <tbody>
            <tr >
                <th scope="row">{props.index}</th>
                <td > {props.value.state} </td>
                <td> {props.value.recovered} </td>
                <td> {props.value.confirmed} </td>
                <td> {props.value.active} </td>
            </tr>
        </tbody>
    )
}

export default Covid19data
