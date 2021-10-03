import React from "react";
import './new-user-styles.css'
import ButtonAgree from "../Buttons/button-agree";
import ButtonClose from "../Buttons/button-close";

function NewUser( {hideNewUser, addNewUser} ) {

    return <tr className={'new-user'}>
        <th>65</th>
        <td><input type="text" placeholder={"Введите имя"}/></td>
        <td><input type="text" placeholder={"Введите фамилию"}/></td>
        <td><input type="text" placeholder={"Введите username"}/></td>
        <td><ButtonAgree onClick={ addNewUser } /> <ButtonClose onClick = { hideNewUser } /></td>
    </tr>
}


export default NewUser;