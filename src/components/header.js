import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header className="navbar navbar-expand navbar-dark flex-column flex-md-row bd-navbar bg-dark">
        <a className="navbar-brand" href="#">
          <span>INSITE</span>
        </a>

        <ul className="navbar-nav flex-row ml-md-auto d-none d-md-flex text-white">
          <li className="nav-item border-right">
            <a href="" className="text-white a-icon"><i className="fas fa-search fa-2x mx-2"></i></a>
          </li>
          <li className="nav-item border-right">
            <a href="" className="text-white a-icon"><i className="fas fa-cog fa-2x mx-2"></i></a>
          </li>
          <li className="nav-item">
            <a href="" className="text-white a-icon"><i className="fas fa-user-circle fa-2x mx-2"></i> Queiroz, Cleiton</a>
          </li>
        </ul>
      </header>
    );
  }
}

export default Header;
