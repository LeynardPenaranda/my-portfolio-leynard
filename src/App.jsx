import React, {useState} from 'react';
import CreateNote from "./CreateNote"; 
import Note from "./Note";

function App() {
  const [inputNote, setinputNote] = useState({ title: "", content: "" });
  const [note, setNote] = useState([]);

  function inputFunction(event) {
    const { name, value } = event.target;
    setinputNote((prevInput) => {
      return { ...prevInput, [name]: value };
    });
  }

  function addNote(event) {
    event.preventDefault();

    setNote((prevInput) => {
      return [...prevInput, inputNote];
    });
    setinputNote({ title: "", content: "" });
  }

  function deleteNote(id) {
    setNote((prevInput) => {
      return prevInput.filter((items, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <CreateNote
        onInputChange={inputFunction}
        addnote={addNote}
        inputNote={inputNote}
      />
      {note.map((items, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={items.title}
            content={items.content}
            delete={deleteNote}
          />
        );
      })}
    </div>
  );
}

export default App;
