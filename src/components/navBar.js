import React from 'react';


const NavBar = props => {
  let navStyles = {
    backgroundColor: '#e3f2fd'
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={navStyles}>
      <div className="container">
        <a className="navbar-brand" href="#">
          KanBan
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Add Card
              </a>
            </li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
        <li>
          <a className="nav-link" href="#">Sign Up</a>
        </li>
        <li>
          <a className="nav-link" href="#">Login</a>
        </li>
      </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
