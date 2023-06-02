import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./Header"
import Actor from "./Actor";
import Actor2 from "./Actor2";
import Actors from "./Actors";
import Home from "./Home";
import Producers from "./Producers";
import Movies from "./Movies";
import Movie from "./Movie";

function App() {

    const favoriteProducer = "Jane Smith";

    const moviesArr = ["All Quiet on the Western Front", "Fail Safe"]

    const actorArr = ["Salma Hayak", "Leo"]

    return (
            <Routes>
                <Route path = '/' element = { <Home /> } />
                <Route path = '/actors'>
                    <Route index element = { <Actors actorArr = { actorArr } /> } />
                    <Route exact path = '1' element = { <Actor /> } />
                    <Route exact path = '2' element = { <Actor2 /> } />
                </Route>
                <Route path = '/producers' element = { <Producers favoriteProducer = { favoriteProducer} /> } />
                <Route path = '/movies' element = { <Movies /> } />
                <Route path = '/movies/1' element = { <Movie /> } />
                <Route path = '/movies'>
                    <Route index element = { <Movies/> } />
                    <Route exact path = '1' element = { <Movie moviesArr = {moviesArr} /> } />
                </Route>
            </Routes>
    )
}

export default App;