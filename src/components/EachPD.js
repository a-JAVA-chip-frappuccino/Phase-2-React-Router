import React from "react";

function EachPD( { id, species, name, handleDelete, handlePatch } ) {

    return (
            <li>
                <h1>{name}</h1>
                <h2>{species}</h2>
                <button onClick = {() => handleDelete(id)}>DELETE</button>
                PATCH:
                <form onSubmit = {(e) => handlePatch(id, e)}>
                    Name: <input type = 'text' name = 'name' />
                    Species <input type = 'text' name = 'species' />
                    <input type = 'submit' value = 'Submit' />
                </form>
            </li>
    );
}

export default EachPD;