import React from 'react'
import ArchiveButton from './ArchiveButton'
import DeleteButton from './DeleteButton'

import '../styles/body.css';

const NoteItem = () => {
  return (
    <div className="note-item">
        <div className="note-item__content">
          <div className="note-item__heading">
              <h1 className="note-item__title">Babel</h1>
              <span className="note-item__date">Kamis, 2 Maret 2022</span>
          </div>
          <div className="note-item__body">
              <p>Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama </p>
              <span>Read More...</span>
          </div>
        </div>
        <div className="note-item__action">
            <DeleteButton/>
            <ArchiveButton/>
        </div>
    </div>
  )
}

export default NoteItem