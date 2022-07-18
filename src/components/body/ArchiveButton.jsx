import React from 'react'

const ArchiveButton = ({addToArchive, activeTab}) => {
  function handleClick(e) {    
    addToArchive(e.target.parentElement.parentElement)
  }

  return (
    <button className="archive-btn action-btn" onClick={handleClick}>
      {/* {activeTab === 'tabArchive' ? 'Unarchive' : 'Archive'} */}
      Archive
    </button>
  )
}

export default ArchiveButton