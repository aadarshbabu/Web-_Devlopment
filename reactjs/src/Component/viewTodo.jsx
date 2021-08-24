import React from "react";
// When you decleared a component it must bu Fist later capital.
export function ViweTodo(props) {
  return (
    <>
      <div className="list">
        <i
          onClick={() => props.clicklist(props.id)}
          class="fas fa-times-circle"
        ></i>
        <ol>
          <li> {props.value} </li>
        </ol>
      </div>
    </>
  );
}
