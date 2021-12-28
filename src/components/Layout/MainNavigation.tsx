import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navigation, NavItem, NavList } from './LayoutStyle';

const MainNavigation: React.FC = () => {
  return (
    <Navigation>
      <NavList>
        <NavItem>
          <NavLink activeClassName="nav-active" to="/weather">
            Weather
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink activeClassName="nav-active" to="/currency">
            Currency
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink activeClassName="nav-active" to="/news">
            News
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink activeClassName="nav-active" to="/contact">
            Contact
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink activeClassName="nav-active" to="/signin">
            Sign in
          </NavLink>
        </NavItem>
      </NavList>
    </Navigation>
  );
};

export default MainNavigation;
