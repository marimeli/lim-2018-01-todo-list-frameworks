import React, { Component } from 'react';
import { Card, CardBody, Form, FormGroup, Input, Button } from 'reactstrap';

class TodoForm extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      description: ''
    };
  };

  //Función que ejecutará el evento submit del formuñario
  handleSubmit = (e) => {
    e.preventDefault(); //evita refrescar la página
    this.props.onAddTodo(this.state);
    this.setState({
      title: '',
      description: ''
    })
  };

  //Función para capturar el valor que reciba el input que está ejecutándose. 
  handleInputChange = (e) => {
    const { value, name } = e.target;
    this.setState({
      //name me permite saber qué input es el que está escribiendo, por el nombre
      //el input(nombre) que tiene que actualizar es el valor que estoy escribiendo
      [name]: value
    });
  };


  render() {
    return (
      <Card>
        <CardBody>
          <Form onSubmit={this.handleSubmit}>

            <FormGroup>
              <Input
                type="text"
                name="title"
                value={this.state.title}
                onChange={this.handleInputChange}
                placeholder="Título"
              />
            </FormGroup>

            <FormGroup>
              <Input
                type="text"
                name="description"
                value={this.state.description}
                onChange={this.handleInputChange}
                placeholder="Descripción"
              />
            </FormGroup>

            <Button type="submit" className="btn btn-outline-dark"> Agregar <i className="fas fa-plus-circle"></i>  </Button>
          </Form>
        </CardBody>
      </Card>
    )
  }
}

export default TodoForm;