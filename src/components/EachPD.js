import React from "react";

function EachPD( { id, species, name, newName } ) {

    return (
            <li>
                <h1>{name}</h1>
                <h2>{species}</h2>
                <button>DELETE</button>
            </li>
    );
}

export default EachPD;