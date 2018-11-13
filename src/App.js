import React, { Component } from 'react';
import './App.css';
/* import Todos from './components/Todos'; */
import { todos } from './todos.json'; // data
import TodoForm from './components/TodoForm';
import Navigation from './components/Navigation';
import {
  Container, Row, Col, Card, CardHeader, CardBody,
  CardTitle, CardSubtitle, CardFooter, Button
} from 'reactstrap';
/* import TodoCards from './components/TodoCards'; */


class App extends Component {
  constructor() {
    super();
    this.state = {
      todos
    }
  };

  //Función para eliminar tareas
  deleteTodo = (index) => {
    if (window.confirm('¿Estas segur@ de eliminar esta tarea?')) {
      this.setState({
        todos: this.state.todos.filter((e, i) => {
          return i !== index
        })
      });
    }
  };

  //Función para resolver tareas como completadas
  solveTodo = (index) => {
    const { todos } = this.state
    if (document.getElementById(todos[index].title).classList.contains('change')) {
      document.getElementById(todos[index].title).classList.remove('change')
    }
    else {
      document.getElementById(todos[index].title).classList.add('change');
    }
  };

  //Función para agregar tareas 
  addTodo = (todo) => {
    if (todo.title.length && todo.description.length) {
      this.setState({
        todos: [...this.state.todos, todo]
      })
    } else {
      alert('Completa los campos')
    }
  };

  render() {
    const todos = this.state.todos.map((todo, i) =>
      <Col md="4" key={i}>
        <Card className="mt-4 text-center">
          <CardHeader>
            <CardTitle>{todo.title}</CardTitle>
          </CardHeader>
          <CardBody>
            <CardSubtitle id={todo.title}>{todo.description}</CardSubtitle>
          </CardBody>
          <CardFooter>
            {/* <ItemsCards name="Borrar"></ItemsCards> */}
            <Button className="btn btn-outline-success mt-1" onClick={() => this.solveTodo(i)}>
              <i className="fas fa-check-circle"></i> </Button>
            <Button className="btn btn-outline-danger ml-2 mt-1" onClick={() => this.deleteTodo(i)}>
              <i className="fas fa-trash-alt"></i> </Button>
          </CardFooter>
        </Card>
      </Col>
    )

    return (
      <div className="App" >
        <Navigation title="Lista de tareas" count={this.state.todos.length} /> {/* pasandole propiedad y su valor al componente */}
        <Container>
          <Row className="mt-4">
            <Col xs="12" className="text-center">
              <TodoForm onAddTodo={this.addTodo}></TodoForm>
            </Col>
            <Col xs="12">
              <Row> {todos} </Row>
              {/*   <Todos/> */}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;

