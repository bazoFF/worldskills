import React, { useState } from "react";
import './new-user-styles.css'
import ButtonAgree from "../Buttons/button-agree";
import ButtonClose from "../Buttons/button-close";

function CreateUpdateUser({hideCreateUpdateUser, createUpdateUser, userForUpdate} ) {
    let [nameVal, setNameVal] = useState('');
    let [secondNameVal, setSecondNameVal] = useState('');
    let [emailVal, setEmailVal] = useState('');

    const updateNameVal = (e) => setNameVal(e.target.value);
    const updateSecondNameVal = (e) => setSecondNameVal(e.target.value);
    const updateEmailVal = (e) => setEmailVal(e.target.value);

    // const handle = (e) => updateEmailVal(e)

    // if (userForUpdate) {
    //     nameVal = userForUpdate.name;
    //     secondNameVal = userForUpdate.secondName;
    //     emailVal = userForUpdate.email;
    // }

    const createUpdateUserHandle = () => {
        if (!nameVal || !secondNameVal || !emailVal) {
            alert('Неправильный ввод данных');
            return;
        }

        const dto = {
            name: nameVal,
            secondName: secondNameVal,
            email: emailVal,
        };

        if (userForUpdate) {
            dto.id = userForUpdate.id;
        }

        createUpdateUser(dto);
    };

    return <tr className={'new-user'}>
            <th>{userForUpdate ? userForUpdate.id : null}</th>
            <td><input type="text" value={nameVal} onChange={ updateNameVal } placeholder={"Введите имя"}/></td>
            <td><input type="text" value={secondNameVal} onChange={ updateSecondNameVal } placeholder={"Введите фамилию"}/></td>
            <td><input type="text" value={emailVal} onChange={ updateEmailVal } placeholder={"Введите email"}/></td>
            <td><ButtonAgree onClick={ createUpdateUserHandle } /> <ButtonClose onClick = { hideCreateUpdateUser } /></td>
        </tr>
}

export default CreateUpdateUser;
