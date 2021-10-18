import React, {useEffect, useState} from "react";
import ButtonAdd from "./Buttons/button-add";
import TableBody from "./Table/table-body";
import data from "bootstrap/js/src/dom/data";

function App() {

    const [users, setUsers] = useState([]);
    // let test = [
    //     {id: 1, firstName: 'Misha', lastName: 'Cool', email: '4@'},
    //     {id: 2, firstName: 'Liza', lastName: 'Kim', email: '5@'},
    //     {id: 3, firstName: 'Masha', lastName: 'Min', email: '6@'},
    //     {id: 4, firstName: 'Mashaaaa', lastName: 'Min', email: '6@'},
    // ];

    const updateList = () => {
        fetch('http://newbase/api/users')
            .then(async (response) => {
                // console.log(2);
                setUsers(await response.json());
                // console.log(3);
            });
    }


    // console.log(1);
    useEffect(() => {
        updateList()
        // console.log('useEffect');
        // fetch('http://newbase/api/users')
        //     .then(async (response) => {
        //         console.log(2);
        //         setUsers(await response.json());
        //         console.log(3);
        //     });
        // console.log(4);
    }, []);
    // console.log(5); // 1 - 5 - useEffect - 4 - 2 - 1 - 5 - 3

    const [showCreateUpdateUserState, setShowCreateUpdateUserState] = useState(false);

    const deleteUser = (id) => {
        fetch(`http://newbase/api/users/${id}`, {
            method: 'DELETE',
        }).then(() => updateList())
    };

    const showCreateUpdateUser = () => setShowCreateUpdateUserState(true);
    const hideCreateUpdateUser = () => setShowCreateUpdateUserState(false);

    const createUpdateUser = (dto) => {
        dto.id ? updateUser(dto) : createUser(dto);
        hideCreateUpdateUser();
    };

    const createUser = (dto) => {
            fetch('http://newbase/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify({
                    id: dto.id,
                    firstName: dto.firstName,
                    lastName: dto.lastName,
                    email: dto.email
                })
            })
                .catch((err) => err)
                .then(() => updateList())
    }

    const updateUser = (dto) => {
        fetch(`http://newbase/api/users/${dto.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify ( {
                id: dto.id,
                firstName: dto.firstName,
                lastName: dto.lastName,
                email: dto.email
            })
        }).then(() => updateList())
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
