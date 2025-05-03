import React from 'react';
import {Route,Routes} from 'react-router-dom'
import { TodoProvider } from './Context/TodoContext';
import TodoApp from './Components/TodoApp';



const App = () => {
  return (
    <TodoProvider>
      <Routes>
        <Route path='/' element={ <TodoApp/>}/>
      </Routes>
       
    </TodoProvider>
  );
};

export default App;
