import React from "react";
import ButtonDelete from "../Buttons/button-delete";
import ButtonEdit from "../Buttons/button-edit";
import NewUser from "./new-user";

function TableBody ({users, onDeleteUser, showNewUser, hideNewUser, addNewUser}) {
    const newUser = showNewUser ? <NewUser hideNewUser = { hideNewUser } addNewUser = { addNewUser } /> : null;
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
            {newUser}
        </tbody>
    )
}


export default TableBody;