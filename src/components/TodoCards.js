import React, { Component } from 'react';
import { Button } from 'reactstrap';

class ItemsCards extends Component {
  render() {
    return (
      <div>
        <Button className="btn btn-outline-success ml-4 mt-1"> <i className="fas fa-check-circle"></i> </Button>
        <Button className="btn btn-outline-danger mt-1"> <i className="fas fa-trash-alt"></i> </Button>
      </div>
    )
  }
}

export default ItemsCards; 