import React, { useState } from "react";

export function Lights() {

    const [clase, setClase] = useState("");

    function cambiaClase(e) {
        console.log(e.target.className);
        setClase(e.target.className);
    }


    return (
        <div className="semaforo">
            <div className={"red-light" + (clase == "red-light" ? " rActive" : "")} onClick={(e) => cambiaClase(e)}></div>
            <div className={"yellow-light" + (clase === "yellow-light" ? " yActive" : "")} onClick={(e) => cambiaClase(e)}></div>
            <div className={"green-light" + (clase === "green-light" ? " gActive" : "")} onClick={(e) => cambiaClase(e)}></div>
        </div>
    )
}