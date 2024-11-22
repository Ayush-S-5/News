import React, { useState } from 'react';

export class Navbar extends React.Component {
  state = {
    clicked: false
  };

  handleButtonClick = () => {
    this.setState({ clicked: true });
    window.location.reload();
  };

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand"   
 href="#">NEWS-HeadLiner</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span   
 className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                <li className="nav-item" onClick={this.handleButtonClick}>
                  <a className="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                {/* ... other nav items */}
              </ul>
              <ul className="mr-auto">
                <li className="nav-item">
                  <a className="nav-link" href="/">Made by Ayush</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;