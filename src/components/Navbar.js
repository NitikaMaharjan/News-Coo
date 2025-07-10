import React, { Component } from 'react'

export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">News Coo</a>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="/">Characters</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="/">Devil Fruits</a>
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