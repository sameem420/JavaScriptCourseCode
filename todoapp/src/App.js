import { useState, useRef } from 'react';
import './App.css';

function App() {
  const [todoItems, setTodoItems] = useState([]);
  const [editItem, setEditItem] = useState(false);
  const inputRef = useRef();
  const editInputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputRef.current.value === '') {
      alert("Please type something ...")
    }
    else {
      const item = inputRef.current.value;
      setTodoItems([...todoItems, item]);
      inputRef.current.value = '';
    }
    
  }
 
  const handleDelete = (index) => {
    todoItems.splice(index, 1);
    setTodoItems([...todoItems]);
  }

  const handleEdit = () => {
    setEditItem(true);
  }

  const handleChange = (e) => {
    console.log(e.target.value)
  }
 
  const handleSave = (index) => {
    let itemValue = editInputRef.current.value;
    todoItems.splice(index, 1, itemValue)
    setTodoItems([...todoItems]);
    setEditItem(false);
    console.log(todoItems);
  }

  return (
    <div className="container">
        <div className="col-md-12">
          <form onSubmit={handleSubmit}>
            <div className="mt-3 mb-3">
              <input className="form-control" type="text" placeholder="New Task" ref={inputRef} />
            </div>
            <div className="mb-3">
              <button className="btn btn-primary">Add</button>
            </div>
          </form>
        </div>
      <ul className="list-group">
        {todoItems.map((todoItem, index) => {
          return ( 
            <li className="list-group-item" key={index}>
              { editItem ? 
              <div>
                <input className="form-control" onChange={(e) => handleChange(e)} ref={editInputRef} />
                <button className="btn btn-success float-end m-2" onClick={() => handleSave(index)}>Save</button>
              </div>
              : 
              <div>
                <input className="form-control" defaultValue={todoItem} />
                
              </div> 
              }
              <button className="btn btn-success float-end m-2" onClick={handleEdit}>Edit</button>
              <button className="btn btn-danger float-end m-2" onClick={() => handleDelete(index)}>Delete</button>
            </li>
          )
        }
        )}
      </ul>
    </div>
  );
}

export default App;
