import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function ButtonAdd({onClick}) {
    return <button className={"btn"} onClick={onClick}><i className="bi bi-person-plus-fill"/></button>
}

export default ButtonAdd;