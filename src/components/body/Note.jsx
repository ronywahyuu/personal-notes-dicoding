import React from "react";
import ArchiveButton from "./ArchiveButton";
import DeleteButton from "./DeleteButton";
// import NoteItem from "./NoteItem";

import "../styles/body.css";
import UnarchiveButton from "./UnarchiveButton";

const Note = ({ id, title, body, createdAt, archived, addToArchive, addToUnarchived, deleteNotes, activeTab}) => {
    return (
        <div id={id} className={`note-item ${archived ? "archived" : ''}`}>
            <div className="note-item__text">
                <div className="note-item__heading">
                    <h1 className="note-item__title"> {title} </h1>{" "}
                    <span className="note-item__date"> {createdAt} </span>{" "}
                </div>{" "}
                <div className="note-item__body">
                    <p>
                        {body}
                    </p>
                    <span> Read More... </span>{" "}
                </div>{" "}
            </div>
            <div className="note-item__action">
                <DeleteButton 
                    deleteNotes={deleteNotes}/>
                {activeTab === 'tabActive' ? 
                    <ArchiveButton 
                        addToArchive={addToArchive}/> : 
                    <UnarchiveButton 
                        addToUnarchived={addToUnarchived}/>}
                {/* <ArchiveButton 
                    activeTab={activeTab}
                    addToArchive={addToArchive}/> */}
            </div>{" "}
        </div>
    );
};

export default Note;
