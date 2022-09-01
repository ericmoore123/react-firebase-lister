import "./App.css";
import Todo from "./components/Todo";
import closeImage from "./images/close.png";
import { useState, useEffect } from "react";
import { doc, addDoc, getDocs, collection, deleteDoc } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";

const App = (props) => {
  const [newItem, setNewItem] = useState("");
  const [documents, setDocuments] = useState([]);
  const db = props.db; 

  useEffect( () => {
    let arr = [];
    const fetchDocs = async () => {
      let data = await getDocs(collection(db, "Todos"));
      data.forEach(doc => {
        arr.push({id: doc.id, value: doc.data()})
      });
      setDocuments(arr);
    }
    fetchDocs();
  });

  const handleRemoveItem = async (e) => {
    const docRef = doc(db, 'Todos', e.target.parentNode.parentNode.id);
    try{
      await deleteDoc(docRef);
      console.log('Item deleted successfully!');
    }catch(err){
      console.error(err);
    }
  };

  const handleAddItem = async (e) => {
    e.preventDefault();
    
    await addDoc(collection(db, "Todos"), {
      Todo: newItem.value,
      id: newItem.id
    }).then(() => console.log('Item added successfully.'))
      .catch(err => console.error(err));

    setNewItem('');
    e.target.todo_input.value = "";
  };

  return (
    <div className="container">
      <h1>Todo List Application</h1>

      <form onSubmit={handleAddItem}>
        <label>List Item to add:</label>
        <input required type="text" id="item-input" name="todo_input" onChange={input => setNewItem({value: input.target.value, id: Date.now() })} />
        <button type="submit" className="btn add-item">
          Add
        </button>
      </form>

      <p className="list-header">Item List:</p>
        <div className="list-wrapper">
          <ul className="item-list">
            {documents.map((item) => (
              <Todo key={item.value.id} id={item.id} removeItem={handleRemoveItem} item={item.value.Todo} image={closeImage} />
            ))}
          </ul>
        </div>
    </div>
  );
};

export default App;
