import React from "react";
import ButtonDelete from "../Buttons/button-delete";
import ButtonEdit from "../Buttons/button-edit";

function TableBody ({users, onDeleteUser}) {
    return (
        <tbody>
            {
                users?.map(user => {
                    const handle = () => onDeleteUser(user.id);
                    return (
                        <tr>
                            <th>{ user.id }</th>
                            <td>{ user.name }</td>
                            <td>{ user.secondName }</td>
                            <td>{ user.email }</td>
                            <td><ButtonEdit/> <ButtonDelete onClick={ handle }/></td>
                        </tr>
                    )
                })
            }
        </tbody>
    )
}


export default TableBody;