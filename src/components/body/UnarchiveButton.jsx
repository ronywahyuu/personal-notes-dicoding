import React from "react";

const UnarchiveButton = ({addToUnarchived}) => {
    function handleClick(e) {
        addToUnarchived(e.target.parentElement.parentElement)
    }
    return (
        <button className="archive-btn action-btn" onClick={handleClick}>
            {/* {activeTab === 'tabArchive' ? 'Unarchive' : 'Archive'} */}
            Unarchive
        </button>
    );
};

export default UnarchiveButton;
