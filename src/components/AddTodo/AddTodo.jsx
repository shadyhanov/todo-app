import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function AddTodo({ todo, setTodo }) {
  const [value, setValue] = useState("");

  function saveTodo() {
    setTodo([
      ...todo,
      {
        id: uuid(),
        title: value,
      },
    ]);
    setValue("");
  }

  return (
    <div>
      <input
        placeholder="Enter the text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={saveTodo}>Save</button>
    </div>
  );
}

export default AddTodo;
