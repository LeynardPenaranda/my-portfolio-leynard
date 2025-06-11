import React from "react";

function CreateNote(props) {
  return (
    <div className="form">
      <form>
        <input
          name="title"
          onChange={props.onInputChange}
          placeholder="Title"
          value={props.inputNote.title}
        />
        <textarea
          name="content"
          onChange={props.onInputChange}
          placeholder="Take a note..."
          rows="3"
          value={props.inputNote.content}
        />
        <button onClick={props.addnote}>Add</button>
      </form>
    </div>
  );
}

export default CreateNote;
