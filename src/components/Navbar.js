import React, { Component } from 'react';
import { Link } from "react-router";

export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">                
                <a className="navbar-brand" style={{cursor: "pointer", fontWeight: "500"}} href="/">
                  <img src="/images/logo.jpg" style={{height: "34px", borderRadius: "50%"}}  className="mx-2"/>
                  News Coo
                </a>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                          <Link className="nav-link" to="/characters">Characters</Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/devil-fruits">Devil Fruits</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
      </div>
    )
  }
}

export default Navbar