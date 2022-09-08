import { useState } from 'react';
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

export default function AddTodo() {
    const [title, setTitle] = useState('');

    const handleAddItem = async (e) => {
        e.preventDefault();
        
        if(title !== ""){
            await addDoc(collection(db, 'Todos'), {
                title,
                completed: false,
            });
            setTitle("");
            e.target.todo_input.value = "";
        }
      };

  return (
    <form onSubmit={handleAddItem}>
        <label>List Item to add:</label>
        <input
          required
          type="text"
          id="item-input"
          name="todo_input"
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit" className="btn add-item">
          Add
        </button>
      </form>
  )
}
