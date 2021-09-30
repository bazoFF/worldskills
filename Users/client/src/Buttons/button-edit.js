import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function ButtonEdit() {
    return <div className={"btn"}><img src={process.env.PUBLIC_URL + '/img/edit.png'} alt="edit" /></div>
}

export default ButtonEdit;