import React, { Component } from 'react';
import db from '../Firebase';
import { Table, Button } from "reactstrap";

class Todos extends Component {
  constructor() {
    super();
    this.state = {
      item: []
    }
  };

  componentDidMount() {
    db.collection('todos').get().then(snapShots => {
      this.setState({
        items: snapShots.docs.map(doc => {
          return {
            id: doc.id,
            data: doc.data()
          };
        })
      })
    }, err => {
      console.log(err);
    })
  }

  render() {
    /* console.log(this.state.items); */
    const { items } = this.state;
    return (
      <div>
        <Table hover className="texcenter">
          <thead>
            <tr>
              <th> Título </th>
              <th> Completado </th>
              <th> Eliminar </th>
            </tr>
          </thead>
          <tbody>
            {items && items !== undefined ?
              items.map((item, i) => (
                <tr key={i}>
                  <td>{item.data.item}</td>
                  <td><Button className="btn btn-outline-success ml-4 mt-1"> <i className="fas fa-check-circle"></i> </Button></td>
                  <td> <Button className="btn btn-outline-danger mt-1"> <i className="fas fa-trash-alt"></i> </Button></td>
                </tr>
              ))
              : null}

          </tbody>
        </Table>
      </div>
    )
  }
}

export default Todos;