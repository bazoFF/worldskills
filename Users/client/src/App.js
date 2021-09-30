import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import ButtonAdd from "./Buttons/button-add";
import TableBody from "./Table/table-body";
import NewUser from "../src/Table/new-user";

function App() {

  const [users, setUsers] = useState([
    {id: 1, name: 'Misha', secondName: 'Cool', email: '4@'},
    {id: 2, name: 'Liza', secondName: 'Kim', email: '5@'},
    {id: 3, name: 'Masha', secondName: 'Min', email: '6@'},
  ])

  const deleteUser = (id) => setUsers(users.filter(( user) => user.id !== id));

  const createUser = (obj) => {
    setUsers(users.push(obj))
  }

  return (
    <div>
      <table className="table">
        <thead>
            <tr>
              <th>#</th>
              <th>Имя</th>
              <th>Фамилия</th>
              <th>Username</th>
              <th><ButtonAdd onCreateUser={ createUser } /></th>
            </tr>
        </thead>
        <TableBody users={ users } onDeleteUser={ deleteUser }/>
      </table>
        <NewUser/>
    </div>
  )

}

export default App;
