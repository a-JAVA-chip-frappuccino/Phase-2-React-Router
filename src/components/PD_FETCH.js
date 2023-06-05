import React from "react";
import EachPD from "./EachPD";

function PD_FETCH( { animals } ) {

    const mappedAnimals = animals.map((animal) => (
        <EachPD
            key = {animal.id}
            id = {animal.id}
            species = {animal.species}
            name = {animal.name}
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