import React, { useState } from "react";
import EachPD from "./EachPD";

function PD_FETCH( { animals, setAnimals } ) {

    const [newName, setNewName] = useState("")

    const mappedAnimals = animals.map((animal) => (
        <EachPD
            key = {animal.id}
            id = {animal.id}
            species = {animal.species}
            name = {animal.name}
            newName = {newName}
        />
    ))

    function handlePatch(e) {
        e.preventDefault();
        setNewName(e.target.name.value);
    }

    return (
        <>
            <ul>
                {mappedAnimals}
            </ul>

            PATCH:
            <form onSubmit = {handlePatch} >
                Name: <input type = 'text' name = 'name' />
                <input type = 'submit' value = 'Submit' />
            </form>
        </>
    );
}

export default PD_FETCH;