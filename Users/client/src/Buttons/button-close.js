import React from "react";

function ButtonClose({onClick}) {
    return <button className={"btn"} onClick={onClick} ><i className="bi bi-x-lg"/></button>
}

export default ButtonClose;