import React from "react";

function EachPD( { id, species, name } ) {

    return (
            <li>
                <h1>{name}</h1>
                <h2>{species}</h2>
            </li>
    );
}

export default EachPD;