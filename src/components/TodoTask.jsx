import React from "react";
import CurrentEditedTask from "./CurrentEditedTask";

function TodoTask({ el, todos, setTodos }) {
  function removeTask(id) {
    let removeTask = todos.filter((todo) => todo.id !== id);
    setTodos(removeTask);
  }

  return (
    <div className="flex mt-[20px] bg-orange-500/30 w-[260px] p-2 justify-between">
      <h1 className="">{el.task}</h1>
      <div>
        <div className="flex">
          <button
            className="mr-[10px]"
            id={el.id}
            onClick={() => {
              removeTask(el.id);
            }}
          >
            Remove
          </button>
          <CurrentEditedTask id={el.id} el={el} todos={todos} setTodos={setTodos}/>
        </div>
      </div>
    </div>
  );
}

export default TodoTask;
