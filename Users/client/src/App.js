import React, {useState} from "react";
import ButtonAdd from "./Buttons/button-add";
import TableBody from "./Table/table-body";

function App() {
    const [users, setUsers] = useState([
        {id: 1, name: 'Misha', secondName: 'Cool', email: '4@'},
        {id: 2, name: 'Liza', secondName: 'Kim', email: '5@'},
        {id: 3, name: 'Masha', secondName: 'Min', email: '6@'},
        {id: 4, name: 'Mashaaaa', secondName: 'Min', email: '6@'},
    ])

    const [showCreateUpdateUserState, setShowCreateUpdateUserState] = useState(false);

    const deleteUser = (id) => setUsers(users.filter((user) => user.id !== id));

    const showCreateUpdateUser = () => setShowCreateUpdateUserState(true);
    const hideCreateUpdateUser = () => setShowCreateUpdateUserState(false);

    const createUpdateUser = (dto) => {
        dto.id ? updateUser(dto) : createUser(dto);
        hideCreateUpdateUser();
    };

    const createUser = (dto) => {
        setUsers([
            ...users, {
                id: users.length + 1,
                name: dto.name,
                secondName: dto.secondName,
                email: dto.email
            }]);
    }

    const updateUser = (dto) => {
        const updatedUsers = users.map(user => {
            if (user.id === dto.id) {
                user.name = dto.name;
                user.secondName = dto.secondName;
                user.email = dto.email;
            }
            return user;
        });
        setUsers(updatedUsers);
    };

    return (
        <div>
            <table className="table" id={'table'}>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Имя</th>
                    <th>Фамилия</th>
                    <th>E-mail</th>
                    <th><ButtonAdd onClick={showCreateUpdateUser}/></th>
                </tr>
                </thead>
                <TableBody users={users}
                           onDeleteUser={deleteUser}
                           showCreateUpdateUserState={showCreateUpdateUserState}
                           showCreateUpdateUser={showCreateUpdateUser}
                           hideCreateUpdateUser={hideCreateUpdateUser}
                           createUpdateUser={createUpdateUser}/>
            </table>
        </div>
    )
}

export default App;
