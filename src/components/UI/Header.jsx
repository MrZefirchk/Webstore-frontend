import React from "react";
import { Link } from "react-router-dom";
import {
  ABOUT_PAGE,
  CART_PAGE,
  CATALOG_PAGE,
  CONTACTS_PAGE,
  HOME_PAGE,
  LOGIN_PAGE,
} from "../../constants/routs";

function Header() {
  return (
    <header>
      <nav>
        <div className="left">
          <Link to={HOME_PAGE} className="logo">
            Logo
          </Link>
        </div>
        <div className="center">
          <ul>
            <li>
              <Link to={CATALOG_PAGE}>Products</Link>
            </li>
            <li>
              <Link to={ABOUT_PAGE}>About us</Link>
            </li>
            <li>
              <Link to={CONTACTS_PAGE}>Contacts</Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="right">
        <ul>
          <li>
            <Link to={CART_PAGE}>Cart</Link>
          </li>
          <li>
            <Link to={LOGIN_PAGE}>log in</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
