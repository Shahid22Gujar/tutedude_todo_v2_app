import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { TodoProvider } from './Context/TodoContext';
import AddTodo from './Components/AddTodo';
import TodoList from './Components/TodoList';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <TodoProvider>
      <Navbar bg="dark" variant="dark" className="mb-4">
        <Container>
          <Navbar.Brand>Todo App</Navbar.Brand>
        </Container>
      </Navbar>
      <Container>
        <AddTodo />
        <TodoList />
      </Container>
    </TodoProvider>
  );
};

export default App;
