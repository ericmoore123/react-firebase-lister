import "./App.css";
import Todo from "./components/Todo";
import closeImage from "./images/close.png";
import AddTodo from "./components/AddTodo";
import { useEffect, useState } from "react";
import { db } from "./firebase";
import {
  query,
  collection,
  deleteDoc,
  onSnapshot,
  doc,
} from "firebase/firestore";

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "Todos"));
    const unsub = onSnapshot(q, (snapshot) => {
      let tempArray = [];
      snapshot.forEach((doc) => {
        tempArray.push({
          ...doc.data(),
          id: doc.id,
        });
      });
      setTodos(tempArray);
    });
    return () => unsub();
  }, []);

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "Todos", id));
  };

  return (
    <div className="container">
      <h1>Todo List Application</h1>
      <AddTodo />

      <p className="list-header">Item List:</p>
      <div className="list-wrapper">
        <ul className="item-list">
          {todos.map((item) => (
            <Todo
              key={item.id}
              handleDelete={handleDelete}
              todo={item}
              image={closeImage}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
