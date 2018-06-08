import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header className="navbar navbar-expand navbar-dark flex-column flex-md-row bd-navbar bg-dark">
        <a className="navbar-brand" href="#">INSITE</a>

        <ul className="navbar-nav flex-row ml-md-auto d-none d-md-flex text-white">
          <li className="nav-item border-right">
            <i class="fas fa-search fa-2x mx-2"></i>
          </li>
          <li className="nav-item border-right">
            <i class="fas fa-cog fa-2x mx-2"></i>
          </li>
          <li className="nav-item">
            <i class="fas fa-user-circle fa-2x mx-2"></i> Queiroz, Cleiton
          </li>
        </ul>
      </header>
    );
  }
}

export default Header;
