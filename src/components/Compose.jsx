import React, { useState, useContext } from 'react';
import { useNavigate } from "react-router-dom"; 
import Context from "../context/context";

const Compose = () => {
  const { addNote } = useContext(Context);
  const navigate = useNavigate();
  const [input, setInput] = useState({ title: "", description: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    addNote(input.title, input.description);
    setInput({title: "", description: ""})
    navigate("/")
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value
    });
  }

  return (
    <div className="h-[60vh] flex items-center justify-center">
      <form className="flex flex-col space-y-2 border p-8 rounded" onSubmit={handleSubmit}>
        <h1 className="text-xl font-bold text-center">Add Your Note</h1>
        <input
          type="text"
          placeholder="Title"
          className="input input-bordered w-full max-w-xs"
          required
          onChange={handleChange}
          value={input.title}
          name="title"
          required
          minLength={5}
        />
        <textarea
          placeholder="Description"
          className="textarea textarea-bordered w-full max-w-xs"
          required
          onChange={handleChange}
          value={input.description}
          name="description"
          minLength={5}
        ></textarea>
        <button className="btn btn-primary">Add Note</button>
      </form>
    </div>
  );
}

export default Compose;