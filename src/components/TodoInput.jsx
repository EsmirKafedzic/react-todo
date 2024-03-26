import React, { useState } from "react";

function TodoInput({todos, setTodos}) {

    const [currentTask, setCurrentTask] = useState('');

    function handleInput(event) {
        setCurrentTask(event.target.value);
    }

    function handleNewTask() {
        if(currentTask) {
            setTodos([...todos, {id: new Date().getTime(), task: currentTask}]);
            setCurrentTask("");
        } else {
            alert("Please insert some words")
        }
    }

  return (
    <div className="flex">
      <input
        type="text"
        placeholder="Insert task"
        className="flex-grow border-2 border-blue-300 p-2"
        value={currentTask}
        onChange={handleInput}
      />
      <button className="bg-red-300 h-full" onClick={handleNewTask}>Add task</button>
    </div>
  );
}

export default TodoInput;
