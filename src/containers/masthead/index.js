import React from 'react';
import cancer_dep_map from './DependencyMapLogo.png';
import { NavLink } from 'react-router-dom';
import './masthead.css';
import sangerLogo from './SangerLogo.png';

const Masthead = () => {
  return (
    <nav className="navbar-expand-lg navbar-dark bg-dark navbar">
      <div className="container">
        <a href="http://www.sanger.ac.uk/" className="navbar-brand">
          <img
            src={sangerLogo}
            width="166"
            height="57"
            className="d-inline-block align-top"
            alt=""
          />
        </a>
        <a href="https://depmap.sanger.ac.uk/" className="ml-3 navbar-brand">
          <img
            src={cancer_dep_map}
            alt="Cancer Dependency Map"
            width="201"
            height="57"
            className="d-inline-block align-top"
          />
        </a>

        <div className="depmap-genes my-auto">
          <NavLink to="/">
            DepMap <span className="col-genes"> | </span>Genes
          </NavLink>
        </div>

        <div className="ml-md-1 my-auto">
          <header className="navbar-nav">
            <NavLink
              to="/"
              activeClassName="active"
              exact
              className="ml-md-3 nav-item nav-link"
            >
              Home
            </NavLink>
            <NavLink
              to="/about-us"
              activeClassName="active"
              className="ml-md-1 nav-item nav-link"
            >
              About
            </NavLink>
            <NavLink
              to="/downloads"
              activeClassName="active"
              className="ml-md-1 nav-item nav-link"
            >
              Downloads
            </NavLink>
          </header>
        </div>
      </div>
    </nav>
  );
};

export default Masthead;
