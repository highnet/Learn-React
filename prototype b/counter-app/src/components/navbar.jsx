import React, { Component } from 'react';

const Navbar = ({totalCounters}) => {
    return (<nav className="navbar navbar-light bl-light">
            <a className="navbar-brand" href="#">
                Counters:
                <span
                className="badge badge-pill badge-secondary m-2"
                >
                {totalCounters}
                </span>
            </a>
        </nav>)
}

export default Navbar;