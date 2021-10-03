import React from "react";

function ButtonAgree({onClick}) {
    return <button className={"btn"} onClick={ onClick}><i className="bi bi-check-lg"/></button>
}

export default ButtonAgree;