import React, { useState } from "react";
import './new-user-styles.css'
import ButtonAgree from "../Buttons/button-agree";
import ButtonClose from "../Buttons/button-close";

function CreateUpdateUser({hideNewUser, createUpdateUser, users, updateUser} ) {
    let [nameVal, setNameVal] = useState('');
    let [secondNameVal, setSecondNameVal] = useState('');
    let [emailVal, setEmailVal] = useState('');

    const updateNameVal = (e) => setNameVal(e.target.value);
    const updateSecondNameVal = (e) => setSecondNameVal(e.target.value);
    const updateEmailVal = (e) => setEmailVal(e.target.value);

    const handleAddNewUser = () => {
        if (nameVal.length > 0 || secondNameVal > 0 || secondNameVal > 0) {
            createUpdateUser(nameVal, secondNameVal, emailVal);
        } else {
            alert('Неправильный ввод данных')
        }
    }
    return <tr className={'new-user'}>
            <th></th>
            <td><input type="text" value={ users.name } onChange={ updateNameVal } placeholder={"Введите имя"}/></td>
            <td><input type="text" value={ users.secondName } onChange={ updateSecondNameVal } placeholder={"Введите фамилию"}/></td>
            <td><input type="text" value={ users.email } onChange={ updateEmailVal } placeholder={"Введите email"}/></td>
            <td><ButtonAgree onClick={ handleAddNewUser } /> <ButtonClose onClick = { hideNewUser } /></td>
        </tr>
}

export default CreateUpdateUser;