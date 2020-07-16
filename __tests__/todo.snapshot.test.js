import Todo from '../app/todo';
import UndoTodo from '../app/undo-delete'
import renderer from 'react-test-renderer';
import React from 'react';
import { undoDelete } from '../app/state-functions'
jest.mock('react-dom')

test('Todo component renders correctly', () => {
    const todo = { id: 1, done: false, name: 'Buy Milk' };
    const rendered = renderer.create(
      <Todo todo={todo}> </Todo>
    )
    expect(rendered.toJSON()).toMatchSnapshot()
  })

test('Test for undo delete button', () => {
  const startState = {
    todos: [],
    deletedTodos: [{ id: 1, done: false, text: 'Buy Milk' }]
  };
  const rendered = renderer.create(
      <UndoTodo undo={undoDelete}> </UndoTodo>
  )
  expect(rendered.toJSON()).toMatchSnapshot()
})
