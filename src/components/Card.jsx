import React, { useContext } from 'react';
import Edit from './Edit';
import Context from '../context/context';

const Card = (props) => {
  const { deleteNote } = useContext(Context);

  const handleDelete = () => {
    deleteNote(props.id);
  };

  return (
    <div className="card w-[80%] bg-base-100 shadow-xl m-auto">
      <div className="card-body">
        <h2 className="card-title">{props.title}</h2>
        <p>{props.description}</p>
        <div className="card-actions justify-end">
          <button
            className="mx-2"
            onClick={() => document.getElementById(`my_modal_${props.id}`).showModal()}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
	<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}>
		<path d="M7 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-1"></path>
		<path d="M20.385 6.585a2.1 2.1 0 0 0-2.97-2.97L9 12v3h3zM16 5l3 3"></path>
	</g>
</svg>
          </button>
          <button onClick={handleDelete}>
            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
	<path fill="currentColor" d="M16 9v10H8V9zm-1.5-6h-5l-1 1H5v2h14V4h-3.5zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2z"></path>
</svg>
          </button>
        </div>
      </div>

      <dialog id={`my_modal_${props.id}`} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <Edit existingNote={props} />
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Card;