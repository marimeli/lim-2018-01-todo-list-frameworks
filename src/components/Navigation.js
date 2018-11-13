import React from 'react';
/* import { todos } from '../todos.json'; */
import { Nav, NavLink } from 'reactstrap';

const Navigation = ({ title, count }) => {
  return (
    <Nav className="navbar navbar-dark bg-secondary justify-content-center">
      <NavLink href="/" className="text-white">{title}
        <span className="badge badge-pill badge-light ml-2">{count}
        </span>
      </NavLink>
    </Nav>
  )
}

export default Navigation; 