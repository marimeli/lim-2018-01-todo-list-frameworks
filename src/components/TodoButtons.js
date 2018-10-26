/* import React, { Component } from 'react';

class TodoButtons extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      description: ''
    };
  }

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
    if (document.getElementById(this.state.todos[index].title).hasAttribute('class')) {
      document.getElementById(this.state.todos[index].title).removeAttribute('class')
    }
    else {
      document.getElementById(this.state.todos[index].title).setAttribute('class', 'change');
    }
  };

  render() {
     //aquí se procesarán los datos que luego se mostrarán. Recorremos el arreglo todos
    const todos = this.state.todos.map((todo, i) => {
      return (
        //crear cards de todos
        <div className="col-md-4" key={i}>
          <div className="card mt-4 text-center">
            <div className="card-header">
              <h3>{todo.title}</h3>
            </div>
            <div className="card-body">
              <div id={todo.title}>
                <p>{todo.description}</p>
              </div>
            </div>
            <div className="card-footer">
              <button
                className="btn btn-outline-danger mt-1"
                onClick={() => this.deleteTodo(i)}>
                Borrrar
              </button>
              <button
                className="btn btn-outline-success ml-4 mt-1"
                onClick={() => this.solveTodo(i)}>
                Completado
              </button>
            </div>
          </div>
        </div>
      )
    }) 
  }
}

export default TodoButtons; */