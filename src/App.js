import React, { Component } from 'react';
import './App.css';
import { todos } from './todos.json'; // data
import TodoForm from './components/TodoForm'; // subcomponents

class App extends Component {
  //agregando el estado
  constructor() {
    super();
    //el estado es la manera en que nosotros estamos al tanto de la aplicacion
    this.state = {
      todos
    }
    this.addTodo = this.addTodo.bind(this);
    this.solveTodo = this.solveTodo.bind(this);
  }

  //Función para eliminar tareas
  deleteTodo(index) {
    if (window.confirm('¿Estas segur@ de eliminar esta tarea?')) {
      this.setState({
        todos: this.state.todos.filter((e, i) => {
          return i !== index
        })
      });
    }
  };

   //Función para resolver tareas como completadas
  solveTodo(index) {
    if (document.getElementById(this.state.todos[index].title).hasAttribute('class')) {
      document.getElementById(this.state.todos[index].title).removeAttribute('class')
    }
    else {
      document.getElementById(this.state.todos[index].title).setAttribute('class', 'change');
    }
  };

  //Función para agregar tareas 
  addTodo(todo) {
    this.setState({
      todos: [...this.state.todos, todo]
    })
  };


  render() {
    //aquí se procesarán los datos que luego se mostrarán. Recorremos el arreglo todos
    const todos = this.state.todos.map((todo, i) => {
      return (
        //crear cards de todos
        <div className="col-md-4 key={i}">
          <div className="card mt-4 text-center">
            <div className="card-header">
              <h3>{todo.title}</h3>
            </div>
            <div className="card-body">
            <div  id={todo.title}>
              <p>{todo.description}</p>
              </div>
            </div>
            <div className="card-footer">
              <button
                className="btn btn-outline-danger"
                onClick={this.deleteTodo.bind(this, i)}>
                Borrrar
              </button>
              <button
                className="btn btn-outline-success ml-4 mt-2"
                onClick={this.solveTodo.bind(this, i)}>
                Completado
              </button>
            </div>
          </div>
        </div>
      )
    })

    return (
      //Esto es lo que pintará/mostrará
      <div className="App" >

        <nav className="navbar navbar-dark bg-secondary justify-content-center">
          <a href="/" className="text-white">Lista de tareas
            <span className="badge badge-pill badge-light ml-2">
              {this.state.todos.length}
            </span>
          </a>
        </nav>

        <div className="container">
          <div className="row mt-4">

            <div className="col-md-4 text-center">
              <TodoForm onAddTodo={this.addTodo}></TodoForm>
            </div>

            <div className="col-md-8">
              <div className="row">
                {todos}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
