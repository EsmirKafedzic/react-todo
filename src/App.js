import { useEffect, useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoTask from "./components/TodoTask";

function App() {

  const [todos, setTodos] = useState([]);
  
  useEffect(() => {
  //  console.log(todos);
  },[todos]);

  return (
    <div className="App">
       <div className="flex flex-col justify-center items-center h-screen">
        <TodoInput todos={todos} setTodos={setTodos}/>
        <div>
          {todos.map((el) => {
            return <TodoTask el={el} id={el.id} todos={todos} setTodos={setTodos}/>
          })}
        </div>
       </div>
    </div>
  );
}

export default App;
