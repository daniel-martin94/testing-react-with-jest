import shortid from 'shortid';

export function toggleDone(state, id) {
  const todos = state.todos.map((todo) => {
    if (todo.id === id) {
      todo.done = !todo.done;
    }

    return todo;
  });

  return { todos };
}

export function addTodo(state, todo) {
  const newTodo = Object.assign({}, todo, {
    id: shortid.generate(),
    done: false
  });
  
  return {
    todos: state.todos.concat([newTodo])
  };
}

export function deleteTodo(state, id) {
 
  let newDeleted = state.todos.filter(todo => {
    if (todo.id === id) {
      return todo
    }
  })
  return {
    todos: state.todos.filter((todo) => todo.id !== id),
    deletedTodos: state.deletedTodos.concat(newDeleted)
  };
}

export function undoDelete(state) {
  let lastDeleted = state.deletedTodos.pop()
  return {
    todos: state.todos.concat([lastDeleted]),
    deletedTodos: state.deletedTodos
  };
}
