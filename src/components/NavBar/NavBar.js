import React from 'react';
import { Nav, NavItem, NavLink} from 'reactstrap';
import './navColor.css';

const NavBar = (props) => {
  return (
    <div className="navColor" style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}>
      <Nav>
        <NavItem>
          <NavLink href="#/">Dashboard</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#/manage">Manage Owner</NavLink>
        </NavItem>
      </Nav>
    </div>
  );
}

export default NavBar;