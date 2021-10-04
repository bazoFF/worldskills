import React from "react";
import ButtonDelete from "../Buttons/button-delete";
import ButtonEdit from "../Buttons/button-edit";
import CreateUpdateUser from "./create-update-user";

function TableBody ({users, onDeleteUser, showNewUser, hideNewUser, createNewUser, updateUser}) {
    const handle = <CreateUpdateUser  users = { users } hideNewUser = { hideNewUser } createUpdateUser = { createNewUser }
                                      updateUser = { updateUser } />
    const newUser = showNewUser ? handle : null;
    return (
        <tbody>
            {
                users?.map(user => {
                    const handle = () => onDeleteUser(user.id);
                    const updateHandle = () => updateUser(user.id);
                    return (
                        <tr>
                            <th>{ user.id }</th>
                            <td>{ user.name }</td>
                            <td>{ user.secondName }</td>
                            <td>{ user.email }</td>
                            <td><ButtonEdit onClick = { updateHandle } /> <ButtonDelete onClick={ handle }/></td>
                        </tr>

                    )
                })
            }
            {newUser}
        </tbody>
    )
}


export default TableBody;