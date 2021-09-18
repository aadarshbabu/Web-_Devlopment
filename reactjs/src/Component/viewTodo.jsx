import React from "react";
// When you decleared a component it must bu Fist later capital.
import ".././Css/App.css";
export function ViweTodo(props) {
  return (
    <>
      <div className="list">
        <i
          onClick={() => props.clicklist(props.id)}
          className="fas fa-times-circle"
        ></i>

        <ol>
          <li> {props.value} </li>
        </ol>

      </div>
    </>
  );
}
