import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/signin">Sign In</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
          <li>
            <Link to="/signout">Sign Out</Link>
          </li>
          <li>
            <Link to="/feature">Feature</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Header;
