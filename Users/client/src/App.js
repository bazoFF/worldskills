import React, {useEffect, useState} from "react";
import ButtonAdd from "./Buttons/button-add";
import TableBody from "./Table/table-body";

function App() {
    const [users, setUsers] = useState([]);

    // let test = [
    //     {id: 1, firstName: 'Misha', lastName: 'Cool', email: '4@'},
    //     {id: 2, firstName: 'Liza', lastName: 'Kim', email: '5@'},
    //     {id: 3, firstName: 'Masha', lastName: 'Min', email: '6@'},
    //     {id: 4, firstName: 'Mashaaaa', lastName: 'Min', email: '6@'},
    // ];

    console.log(1);
    useEffect(() => {
        console.log('useEffect');
        fetch('http://newbase/api/users')
            .then(async (response) => {
                console.log(2);
                setUsers(await response.json());
                console.log(3);
            });
        console.log(4);
    }, []);
    console.log(5); // 1 - 5 - useEffect - 4 - 2 - 1 - 5 - 3

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
                id: dto.id,
                firstName: dto.firstName,
                lastName: dto.lastName,
                email: dto.email
            }]);
    }

    const updateUser = (dto) => {
        const updatedUsers = users.map(user => {
            if (user.id === dto.id) {
                user.firstName = dto.firstName;
                user.lastName = dto.lastName;
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
