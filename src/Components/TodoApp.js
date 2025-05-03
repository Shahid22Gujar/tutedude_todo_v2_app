import { Container, Navbar } from 'react-bootstrap';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import 'bootstrap/dist/css/bootstrap.min.css';
function TodoApp(){
    return (
       <>
             <Navbar bg="dark" variant="dark" className="mb-4">
        <Container>
          <Navbar.Brand>Todo App</Navbar.Brand>
        </Container>
      </Navbar>
      <Container>
        <AddTodo />
        <TodoList />
      </Container>

       </>
    )
}
export default TodoApp;