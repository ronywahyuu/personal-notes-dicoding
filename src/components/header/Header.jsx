import React from "react";
import Nav from "./Nav";

import '../styles/header.css';


const Header = ({activeTab, switchTabHandler, openAddNotesModal, closeAddNotesModal}) => {
    return (
        <header className="header ">
            <h1 className="header__text-heading">Notelify</h1>
            <Nav 
                activeTab={activeTab}
                switchTabHandler={switchTabHandler}
                openAddNotesModal={openAddNotesModal}
                closeAddNotesModal={closeAddNotesModal}
                />
        </header>
    );
};

export default Header;
