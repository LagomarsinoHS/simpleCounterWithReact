import React, { useState } from "react";


export function Lights(props) {
    const [active, setActive] = useState("");

    function cambiaClase(e) {
        console.log("Tengo la clase: ", e.target.className);
        setActive(e.target.className);


    }
    /* //If normal
    let gActive= "";
    if(active=="green-light"){
        gActive="gActive";
    }
    */
    //if Ternario tiene que ser asignada a algo
    let gActive = active == "green-light" ? "gActive" : "";


    return (
        <div className="semaforo">
            <div className={"red-light" + (active === "red-light" ? " rActive" : "")} onClick={(e) => cambiaClase(e)}></div>
            <div className={"yellow-light" + (active === "yellow-light" ? " yActive" : "")} onClick={(e) => cambiaClase(e)}></div>
            <div className={`green-light ${gActive}`} onClick={(e) => cambiaClase(e)}></div>
        </div>
    )
}