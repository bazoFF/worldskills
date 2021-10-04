import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function ButtonEdit({ onClick }) {
    return <div className={"btn"} onClick={ onClick } ><i className="bi bi-pencil-square" /></div>
}

export default ButtonEdit;