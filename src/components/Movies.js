import React from "react";
import { Link } from "react-router-dom";

function Movies() {
    return (
        <>
            <Link to = 'allquiet'>take me to a single movie</Link>
            <p>This is the MOVIES component!</p>
        </>
    )
}

export default Movies;