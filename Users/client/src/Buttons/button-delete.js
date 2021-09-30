import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function ButtonDelete({ onClick }) {

    return <button className={"btn btn-danger"} onClick={ onClick }>-</button>
}

export default ButtonDelete;