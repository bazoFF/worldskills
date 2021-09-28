import React from "react";
import ButtonDelete from "../Buttons/button-delete";
import ButtonEdit from "../Buttons/button-edit";

function CreateTableBody (props) {

    return (
        <tbody>
            {
                props.users.map(user => {
                    return <tr>
                        <th>{ user.id }</th>
                        <td>{ user.name }</td>
                        <td>{ user.secondName }</td>
                        <td>{ user.email }</td>
                        <td><ButtonDelete /> <ButtonEdit/></td>
                    </tr>
                })
            }
        </tbody>
    )
}


export default CreateTableBody;