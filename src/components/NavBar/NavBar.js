import React from 'react';
import { Nav, NavItem, NavLink} from 'reactstrap';

const NavBar = (props) => {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <Nav>
        <NavItem>
          <NavLink href="#/">Dashboard</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#/manage">Mange Owner</NavLink>
        </NavItem>
      </Nav>
    </div>
  );
}

export default NavBar;