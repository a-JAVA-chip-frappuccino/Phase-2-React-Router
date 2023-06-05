import React from "react";

function EachPD( { id, species, name, handleDelete, handlePatch } ) {

    return (
            <li>
                <h1>{name}</h1>
                <h2>{species}</h2>
                <button>DELETE</button>
                PATCH:
                <form>
                    Name: <input type = 'text' name = 'name' />
                    <input type = 'submit' value = 'Submit' />
                </form>
            </li>
    );
}

export default EachPD;