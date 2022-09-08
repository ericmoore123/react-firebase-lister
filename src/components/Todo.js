import { useState } from "react";

export default function Todo({ todo, handleEdit, handleDelete, deleteImage, penImage }) {
  const [newTitle, setNewTitle] = useState(todo.title);

  const handleTitleChange = (e) => {
    e.preventDefault();
    setNewTitle(e.target.value);
  };

  return (
    <li className="list-item">
      <div className="todo-wrapper">
        {/* {todo.title} */}
        <input className="todo-input" value={newTitle} onChange={handleTitleChange} type="text" />
        <div className="icon-wrapper">
          <img
            width="22"
            className="delete-icon"
            src={penImage}
            alt="Delete button"
            onClick={() => handleEdit(todo, newTitle)}
          />
          <img
            width="22"
            className="delete-icon"
            src={deleteImage}
            alt="Delete button"
            onClick={() => handleDelete(todo.id)}
          />
        </div>
      </div>
    </li>
  );
}
