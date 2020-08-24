import React from "react";
import {Nav, NavItem} from "../Nav";
import "./styles.scss";

const Header = ({ myListCount }) => (
  <header className="header-secondary">
    <div className="wrapper">
      <div className="container">
        <div className="header-secondary__brand">
          <a href="/" className="header-secondary__title">dimes.rockarch.org</a>
          <p className="header-secondary__subtitle">The Online Collection and Catalog of Rockefeller Archive Center</p>
        </div>
        <Nav ariaLabel="Main">
          <NavItem href="#" label="Sign in to RACcess" icon="arrow_right_alt" />
          <NavItem href="list" label={`My List${myListCount > 0  ? ` (${myListCount})` : ""}`} icon="arrow_right_alt" />
        </Nav>
      </div>
    </div>
  </header>)

export default Header;
