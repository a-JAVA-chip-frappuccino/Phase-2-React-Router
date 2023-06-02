import React from "react";

function Movie( {moviesArr} ) {

    const movie = moviesArr[0]

    return (
        <>
            <p>We should go to the theatre and watch {movie} tomorrow night!</p>
        </>
    )
}

export default Movie;