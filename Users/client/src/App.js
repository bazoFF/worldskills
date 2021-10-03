import React, {useState} from "react";
import ButtonAdd from "./Buttons/button-add";
import TableBody from "./Table/table-body";

function App() {

  const [users, setUsers] = useState([
    {id: 1, name: 'Misha', secondName: 'Cool', email: '4@'},
    {id: 2, name: 'Liza', secondName: 'Kim', email: '5@'},
    {id: 3, name: 'Masha', secondName: 'Min', email: '6@'},
    {id: 3, name: 'Mashaaaa', secondName: 'Min', email: '6@'},
  ])

  const [stateNewUser, setToggleNewUser] = useState(false);

  const deleteUser = (id) => setUsers(users.filter(( user) => user.id !== id));

  const showNewUser = () => setToggleNewUser(true);
  const hideNewUser = () => setToggleNewUser(false);

  const addNewUser = (nameVal, secondNameVal, emailVal) => {
      hideNewUser();
      // setUsers(users.push({id: users.length, name: nameVal, secondName: secondNameVal, email: emailVal}));
  }

  return (
    <div>
      <table className="table" id={ 'table' }>
        <thead>
            <tr>
              <th>#</th>
              <th>Имя</th>
              <th>Фамилия</th>
              <th>Username</th>
              <th><ButtonAdd onClick={ showNewUser } /></th>
            </tr>
        </thead>
        <TableBody users={ users } onDeleteUser={ deleteUser } showNewUser={ stateNewUser } hideNewUser={ hideNewUser() } addNewUser = { addNewUser }/>
      </table>
    </div>
  )

}

export default App;
