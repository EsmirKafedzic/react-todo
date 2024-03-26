import React, { useState } from "react";

function CurrentEditedTask({ el, todos, setTodos }) {
  const [editedTask, setEditedTask] = useState(null);
    

  function editTask(el) {
    setEditedTask(el.task);
  }

  function updateTodo() {
    const updateTodos = todos.map(todo => {
        if(todo.id === el.id) {
            return {...todo, task: editedTask};
        }
        return todo;
    })
    setTodos(updateTodos);
    setEditedTask(null);
  }

  function handleEditInput(event) {
    setEditedTask(event.target.value);

}

  return (
    <div>
      <div>
        {editedTask ? (
          <div className="flex">
            <input onChange={handleEditInput} className="w-[100px]" placeholder={el.task} />{" "}
            <button
              id={el.id}
              onClick={() => {
                updateTodo(el.id);
              }}
              className="ml-[5px]"
            >
              {" "}
              Yes
            </button>
          </div>
        ) : (
          <button
            id={el.id}
            onClick={() => {
              editTask(el);
            }}
          >
            Edit
          </button>
        )}
      </div>
    </div>
  );
}

export default CurrentEditedTask;
