import React, { useState } from 'react';
import Todo from './todo';
import AddTodo from './add-todo';
import UndoTodo from './undo-delete';
import shortid from 'shortid';

import {
  toggleDone,
  addTodo,
  deleteTodo,
  undoDelete
} from './state-functions';

export default class Todos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { id: shortid.generate(), name: 'Write a blog post for Sitepoint', done: false },
        { id: shortid.generate(), name: 'Blog about Jest', done: false },
        { id: shortid.generate(), name: 'Walk the dog', done: false },
      ],
      deletedTodos: []
    }
  }
  toggleDone(id) {
    this.setState(toggleDone(this.state, id));
  }

  addTodo(todo) {
    this.setState(addTodo(this.state, todo));
  }

  deleteTodo(id) {
    this.setState(deleteTodo(this.state, id));
  }

  undoDelete() {
    this.setState(undoDelete(this.state))
  }

  renderTodos() {
    return this.state.todos.map((todo) => {
      return (
        <li key={todo.id}>
          <Todo
            todo={todo}
            doneChange={(id) => this.toggleDone(id)}
            deleteTodo={(id) => this.deleteTodo(id)} />
        </li>
      );
    });
  }

  render() {
    let { deletedTodos }  = this.state
    return (
      <div>
        <div>
          <p>The <em>best</em> todo app out there.</p>
          { deletedTodos.length > 0 && 
            <UndoTodo undo={() => this.undoDelete()}></UndoTodo>
          }
        </div>
        <h1>Things to get done:</h1>
        <ul className="todos-list">{ this.renderTodos() }</ul>
        <AddTodo onNewTodo={(todo) => this.addTodo(todo)} />
      </div>
    )
  }
}
