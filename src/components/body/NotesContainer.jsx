import React from 'react'
// import NoteArchived from './NoteArchived'
import NoteList from './NoteList'
import Search from './Search'

const NotesContainer = ({activeTab,notes}) => {
  return (
    <main>
        <Search/>
        
        <NoteList activeTab={activeTab} notes={notes}/>
    </main>
  )
}

export default NotesContainer