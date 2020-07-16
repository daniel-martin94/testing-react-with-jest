import { toggleDone, deleteTodo, addTodo, undoDelete } from '../app/state-functions';
import { start } from 'live-server';

test('tooggleDone completes an incomplete todo', () => {
  const startState = {
    todos: [{ id: 1, done: false, text: 'Buy Milk' }]
  };

  const finState = toggleDone(startState, 1);

  expect(finState.todos).toEqual([
    { id: 1, done: true, text: 'Buy Milk' }
  ]);
});

test('deleteTodo deletes the todo it is given', () => {
  const startState = {
    todos: [{ id: 1, done: false, text: 'Buy Milk' }],
    deletedTodos: []
  };

  const finState = deleteTodo(startState, 1);

  expect(finState.todos).toEqual([]);
});

test('undoDelete reverts deletion of a to do item', () => {
  const startState = {
    todos: [],
    deletedTodos: [{ id: 1, done: false, text: 'Buy Milk' }]
  };

  const finState = undoDelete(startState)

  expect(finState.deletedTodos).toEqual([])

})


/*
Commented out test for creating a new todo item. 
id is randomly generated upon creation, using toMatchObject
should return true if a subset of values are equal

test('createToDo creates a new to do item', () => {
  const startState = {
    todos: []
  };
  
  const finState = addTodo(startState, { id: 100, done: false, text: 'Buy Cereal' })
  
  expect(finState.todos).toMatchObject([{
    done: false, 
    text: 'Buy Cereal'
  }])
})
*/
