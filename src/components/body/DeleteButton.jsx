import React from 'react'


const DeleteButton = ({deleteNotes}) => {

  const handleOnClick = (e) => {
    e.preventDefault();
    // console.log(e)
    const note = e.target.parentElement.parentElement
    deleteNotes(note);
    // deleteNotes(e.target.parentElement.parentElement);
  }
  return (
    <button className="delete-btn action-btn" onClick={handleOnClick}>
      Delete
    </button>
  )
}

export default DeleteButton