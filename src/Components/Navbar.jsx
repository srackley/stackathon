import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import('./index.css');

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav>
          <NavLink to="/" id="allBooksButton" className="card-1">All Books</NavLink>
        </nav>
      </div>
    );
  }
}

export default Navbar;
