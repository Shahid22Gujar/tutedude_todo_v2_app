import { useEffect,createContext,useState } from "react";
export const TodoContext = createContext();
export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos'))?localStorage.getItem('todos'):[]);
  console.log(JSON.parse(localStorage.getItem('todos')),typeof(JSON.parse(localStorage.getItem('todos'))),'shahid')
  useEffect(() => {
    const stored = localStorage.getItem('todos');
    if (stored) setTodos(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text }]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const clearTodos = () => {
    setTodos([]);
  };
  console.log(todos)

  return (
    <TodoContext.Provider value={{ todos, addTodo, deleteTodo, clearTodos }}>
      {children}
    </TodoContext.Provider>
  );
};
