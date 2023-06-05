import React, { useState } from "react";
import EachPD from "./EachPD";

function PD_FETCH( { animals, setAnimals } ) {

    function handleDelete() {
        }

        function handlePatch() {
        }

    const mappedAnimals = animals.map((animal) => (
        <EachPD
            key = {animal.id}
            id = {animal.id}
            species = {animal.species}
            name = {animal.name}
            handlePatch = {handlePatch}
            handleDelete = {handleDelete}
        />
    ))

    return (
        <>
            <ul>
                {mappedAnimals}
            </ul>
        </>
    );
}

export default PD_FETCH;