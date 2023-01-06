import React, { Component } from 'react';

class Navbar extends Component {
    render() { 
        return (<nav className="navbar navbar-light bl-light">
            <a className="navbar-brand" href="#">
                Navbar
                <span
                className="badge badge-pill badge-secondary m-2"
                >
                {this.props.totalCounters}
                </span>
            </a>
        </nav>);
    }
}

export default Navbar;