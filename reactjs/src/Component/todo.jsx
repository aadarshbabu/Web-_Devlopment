import React, { useState } from "react";
import { ViweTodo } from "./viewTodo";

function TodoApp() {
  const [userData, setuserData] = useState("");
  const [todo, settodo] = useState([]);
  let addTodo = () => {
    settodo([...todo, userData]);
    setuserData("");
  };
  let data = (e) => {
    setuserData(e.target.value);
  };
  let deleteitem = (id) => {
    settodo(
      todo.filter((array, index) => {
        return index !== id;
      })
    );
  };

  return (
    <>
      <div className="todo">
        <label htmlFor="inputbox">TodoList</label>
        <input
          className="inputbox"
          type="text"
          onChange={data}
          name="todotext"
          placeHolder="Enter Todo List"
          value={userData}
          id=""
        />
        <button className="btn" onClick={addTodo}>
          Add List
        </button>

        {todo.map((value, index) => {
          return (
            <ViweTodo
              value={value}
              key={index}
              id={index}
              clicklist={deleteitem}
            />
          );
        })}
      </div>
    </>
  );
}
export default TodoApp;
