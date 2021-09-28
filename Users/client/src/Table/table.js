import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import ButtonAdd from "../Buttons/button-add";
import TableBody from "./table-body";


const users = [
    {id: 1, name: 'Misha', secondName: 'Cool', email: '4@'},
    {id: 2, name: 'Liza', secondName: 'Kim', email: '5@'},
    {id: 3, name: 'Masha', secondName: 'Min', email: '6@'},
]

function MakeTable () {
    return <div>
        <table className="table">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Имя</th>
                <th scope="col">Фамилия</th>
                <th scope="col">Username</th>
                <th><ButtonAdd /> </th>
            </tr>
            </thead>
            <TableBody users={users} />
        </table>
    </div>
}

users.push({id: 3, name: 'Masha', secondName: 'Min', email: '6@'})

export default MakeTable