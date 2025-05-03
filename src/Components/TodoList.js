import React, { useContext, useState } from 'react';
import { TodoContext } from '../Context/TodoContext';
import { ListGroup, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const TodoList = () => {
  const { todos, deleteTodo, clearTodos } = useContext(TodoContext);
  const [search, setSearch] = useState('');
  const filtered = todos.filter(todo =>
    todo.text.toLowerCase().includes(search.toLowerCase())
  )?todos:[];

  return (
    <>
      <Form.Control
        type="text"
        placeholder="Search todos"
        className="mb-3"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ListGroup className="mb-3">
        {filtered.map(todo => (
          <ListGroup.Item key={todo.id} className="d-flex justify-content-between">
            {todo.text}
            <Button variant="danger" size="sm" onClick={() => deleteTodo(todo.id)}>
              Delete
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
      {todos.length > 0 && (
        <Button variant="warning" onClick={clearTodos}>Clear All</Button>
      )}
    </>
  );
};

export default TodoList;