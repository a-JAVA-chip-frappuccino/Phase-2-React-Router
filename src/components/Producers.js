import React from "react";

function Producers( {favoriteProducer} ) {

    console.log(favoriteProducer)

    return (
        <div>
            <h1>My favorite producer is {favoriteProducer}</h1>
        </div>
    )
}

export default Producers;