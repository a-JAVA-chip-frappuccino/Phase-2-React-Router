import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <>
            <p>This is the header of the screen!</p>

            <nav>
                <ul>
                    <li>
                        <Link to = '/movies'>see all the movies</Link>
                    </li>
                    <li>
                        <Link to = '/producers'>producers</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Header;