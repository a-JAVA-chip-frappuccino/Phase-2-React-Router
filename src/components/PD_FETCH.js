import React, { useState } from "react";
import EachPD from "./EachPD";

function PD_FETCH( { animals, setAnimals } ) {

    function handleDelete(id) {

        fetch(`http://localhost:3000/animals/${id}`, {
            method: 'DELETE'
        })
        .then((resp) => resp.json())
        .then(() => {
            // filter out matching id from array to remove deleted object
            const newAnimals = animals.filter((animal) => {
                // return animal.id != id
                if (animal.id != id) {
                    return true
                }
                else {
                    return false
                }
            })

            setAnimals(newAnimals)
        })
    }

    function handlePatch(id, e) {
        e.preventDefault()

        fetch(`http://localhost:3000/animals/${id}`, {
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                // object with any given changes
                {
                    name: e.target.name.value,
                    species: e.target.species.value
                }
            )
        })
        .then((resp) => resp.json())
        .then((patchedAnimal) => {
            // map over array to replace matching id object with patched object
            const newAnimals = animals.map((animal) => {
                if (animal.id == id) {
                    return patchedAnimal;
                }
                else {
                    return animal;
                }
            })

            setAnimals(newAnimals)
        })
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