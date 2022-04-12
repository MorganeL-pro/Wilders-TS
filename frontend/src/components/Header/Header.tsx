import { Link } from 'react-router-dom';
import React from "react";

const Header = (): JSX.Element =>
     (
        <header>
            <Link to ='/' className="title">
                <h1>Wilders Book</h1>
            </Link>
            <nav>
                <Link to="/">Home</Link>
                <Link to ="add">Add a Wilder</Link>
                <Link to="search">Search</Link>
            </nav>
        </header>
    )


export default Header;