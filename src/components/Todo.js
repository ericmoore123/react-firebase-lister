import React from "react";

export default function Todo(props) {
  return (
    <li id={props.id} className="list-item">
      <div className="todo-wrapper">
        {props.item}
        <img
          width="22"
          className="delete-icon"
          src={props.image}
          alt="Delete button"
          onClick={props.removeItem}
        />
      </div>
    </li>
  );
}
