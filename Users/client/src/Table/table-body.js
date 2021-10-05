import React, {useState} from "react";
import ButtonDelete from "../Buttons/button-delete";
import ButtonEdit from "../Buttons/button-edit";
import CreateUpdateUser from "./create-update-user";

function TableBody({
                       users,
                       onDeleteUser,
                       showCreateUpdateUserState,
                       showCreateUpdateUser,
                       hideCreateUpdateUser,
                       createUpdateUser
                   }) {
    const [userForUpdate, setUserForUpdate] = useState(null);

    const createUpdateUserComponent = showCreateUpdateUserState ? <CreateUpdateUser
        hideCreateUpdateUser={hideCreateUpdateUser}
        createUpdateUser={createUpdateUser}
        userForUpdate={userForUpdate}
    /> : null;

    return (
        <tbody>
        {
            users?.map(user => {
                const handle = () => onDeleteUser(user.id);
                const showUpdateUser = () => {
                    setUserForUpdate(user);
                    showCreateUpdateUser();
                };
                return (
                    <tr>
                        <th>{user.id}</th>
                        <td>{user.name}</td>
                        <td>{user.secondName}</td>
                        <td>{user.email}</td>
                        <td><ButtonEdit onClick={showUpdateUser}/> <ButtonDelete onClick={handle}/></td>
                    </tr>

                )
            })
        }
        {createUpdateUserComponent}
        </tbody>
    )
}


export default TableBody;
