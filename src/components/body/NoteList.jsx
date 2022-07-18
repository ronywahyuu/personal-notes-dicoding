import React from 'react'
import Note from './Note'
import '../styles/body.css'


const NoteList = ({activeTab, notes, addToArchive, addToUnarchived, deleteNotes}) => {
  const lengthOfActiveNotes = notes.filter(note => note.archived === false).length
  const lengthOfArchivedNotes = notes.filter(note => note.archived === true).length
  return (
    <>
      <div className="note-list container" >
        {activeTab === 'tabActive' ? <p>Number of Notes: {lengthOfActiveNotes}</p> : <p>Number of Notes: {lengthOfArchivedNotes}</p> }

        {lengthOfActiveNotes === 0 && activeTab === 'tabActive' ? <p className="empty-notes">No Notes</p> : null}
        <div className="note-list__active">
          {
            notes.filter(note=>note.archived === false).map((note)=>{
              return (
                activeTab === 'tabActive' ? 
                  <Note 
                    activeTab={activeTab}
                    key={note.id} 
                    id={note.id}  
                    {...note} 
                    deleteNotes={deleteNotes}
                    addToUnarchived={addToUnarchived}
                    addToArchive={addToArchive} /> : ''
              )
            })
          }
        </div>

        {lengthOfArchivedNotes === 0 && activeTab === 'tabArchive' ? <p className="empty-notes">No Notes</p> : null}
        <div className="note-list__archived ">
          {
            notes.filter(note=>note.archived === true).map((note)=>{
              return (
                activeTab === 'tabArchive' ? 
                  <Note 
                    activeTab={activeTab}
                    key={note.id} 
                    id={note.id}  
                    {...note} 
                    addToArchive={addToArchive}
                    addToUnarchived={addToUnarchived}
                    deleteNotes={deleteNotes}/> : ''
              )
            })
          }
        </div>
      </div>

    </>
  )
}

export default NoteList