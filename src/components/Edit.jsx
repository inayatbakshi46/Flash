
import React, { useState, useEffect, useContext } from 'react';
import Context from "../context/context";
const Edit = ({ existingNote }) => {
  const {updateNote} = useContext(Context)
  const [input, setInput] = useState({ title: '', description: '' });

  useEffect(() => {
    if (existingNote) {
      setInput({
        title: existingNote.title || '',
        description: existingNote.description || '',
      });
    }
  }, [existingNote]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call your updateNote function with the updated input values
    updateNote(existingNote.id, input.title, input.description);
    setInput({ title: '', description: '' });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  return (
    <div className="h-[60vh] flex items-center justify-center">
      <form className="flex flex-col space-y-2 border p-8 rounded" onSubmit={handleSubmit}>
        <h1 className="text-xl font-bold text-center">Edit Note</h1>
        <input
          type="text"
          placeholder="Title"
          className="input input-bordered w-full max-w-xs"
          required
          onChange={handleChange}
          value={input.title}
          name="title"
        />
        <textarea
          placeholder="Description"
          className="textarea textarea-bordered w-full max-w-xs"
          required
          onChange={handleChange}
          value={input.description}
          name="description"
        ></textarea>
        <button className="btn btn-primary">Update Note</button>
      </form>
    </div>
  );
};

export default Edit;