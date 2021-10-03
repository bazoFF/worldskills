import React from "react";

function ButtonDelete({ onClick }) {

    return <button onClick={ onClick } className={'btn'}><i className="bi bi-trash2" /></button>
}

export default ButtonDelete;