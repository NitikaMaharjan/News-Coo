import React, { Component } from 'react'

export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <img src="logo.jpg" style={{height: "38px"}} className="mx-3"/>
                <a className="navbar-brand" href="/">News Coo</a>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <button className="nav-link" onClick={()=>this.props.toHandleTypeChange("characters")}>Characters</button>
                        </li>
                        <li className="nav-item">
                        <button className="nav-link" onClick={()=>this.props.toHandleTypeChange("fruits")}>Devil Fruits</button>
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