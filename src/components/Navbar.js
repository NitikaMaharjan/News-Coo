import { Link } from "react-router";

const Navbar = () => {
  return (
    <>
      <nav className="navbar fixed-top navbar-expand-md bg-body-tertiary">
        <div className="container-fluid"> 
          <div>
            <img src="/images/logo.jpg" style={{height: "34px", borderRadius: "50%"}}  className="mx-2" alt="news coo logo"/>
            <a className="navbar-brand" style={{cursor: "pointer", fontWeight: "500"}} href="/">
              News Coo
            </a>
          </div>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
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
    </>
  )
}

export default Navbar