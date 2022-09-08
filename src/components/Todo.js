import React from "react";

export default function Todo({ todo, handleDelete, image }) {
  return (
    <li className="list-item">
      <div className="todo-wrapper">
        {todo.title}
        <img
          width="22"
          className="delete-icon"
          src={image}
          alt="Delete button"
          onClick={() => handleDelete(todo.id)}
        />
      </div>
    </li>
  );
}
