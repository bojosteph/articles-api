import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Navbar extends Component {
  render() {
    return (
      <div className="navbar-fixed">
        <nav className="z-depth-0">
          <div className="nav-wrapper white">
          <Link to="/" style={{fontFamil: "monospace"}}
          className="col s5 brand-logo center black-text">
            <i className="material-icons">code</i>
             RAILS REACT BAKESHOPPE
          </Link>
         </div>
        </nav>
      </div>
    );
  }
}

export default Navbar
