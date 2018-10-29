import React, { Component } from 'react';
import { todos } from '../todos.json'; 
import { Nav, NavLink } from 'reactstrap';

class Navigation extends Component {
  constructor() { 
    super(); 
    this.state = {
      todos
    }
  };
  
  render() {
    return (
      <Nav className="navbar navbar-dark bg-secondary justify-content-center">
        <NavLink href="/" className="text-white">
          {this.props.title}
          <span className="badge badge-pill badge-light ml-2">  {this.state.todos.length}
          </span>
        </NavLink>
      </Nav>
    )
  }
}

export default Navigation; 