import React from "react";
// import AddNote from "./AddNote";

const Nav = ({activeTab, switchTabHandler, openAddNotesModal}) => {

    function handleClick(event){
        switchTabHandler(event);
        // const items = document.querySelectorAll('.note-item')
        
        // const archivedNotes = items.filter(item => item.classList.contains('archived'));
        // console.log(archivedNotes)
    }
    // const tabClassName = "header__nav-tab";
    const activeTabClass = "header__nav-tab header__nav--active";
    return (
        <nav className="header__nav">
        <ul className="header__list">
            <li>
                <button id="tab1" className={`header__nav-tab ${activeTab === "tabActive" ? activeTabClass : ""}`} data-tab="tabActive" onClick={handleClick}>
                    Active Notes
                </button>
            </li>
            <li>
                <button id="tab2" className={`header__nav-tab ${activeTab === "tabArchive" ? activeTabClass : ""}`} data-tab="tabArchive" onClick={handleClick}>Archived</button>
            </li>
        </ul>

        <button className="header__nav--add-note" onClick={openAddNotesModal}>
            <i className="bx bx-plus"></i> 
            <span>Add Note</span> 
        </button>
    </nav>
    );
};

export default Nav;
