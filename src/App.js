import "./App.css";
import Todo from "./components/Todo";
import closeImage from "./resources/images/close.png";
import penImage from "./resources/images/pen.png";
import AddTodo from "./components/AddTodo";
import { useEffect, useState } from "react";
import { db } from "./firebase";
import {
  query,
  updateDoc,
  collection,
  deleteDoc,
  onSnapshot,
  doc,
} from "firebase/firestore";

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "Todos"));
    const getData = onSnapshot(q, (snapshot) => {
      let tempArray = [];
      snapshot.forEach((doc) => {
        tempArray.push({
          ...doc.data(),
          id: doc.id,
        });
      });
      setTodos(tempArray);
    });
    return () => getData(); // Call function every time useeffect runs
  }, []); // Empty array = called on mounts - state changes

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "Todos", id));
  };

  const handleEdit = async (todo, title) => {
    await updateDoc(doc(db, "Todos", todo.id), {title: title});
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
              handleEdit={handleEdit}
              todo={item}
              penImage={penImage}
              deleteImage={closeImage}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
