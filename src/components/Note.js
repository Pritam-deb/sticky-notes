import React from 'react'
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
const Note = () => {
    return (
        <div className="note">
            <span>This is a new note</span>
            <div className="note-footer">
                <small>Date</small>
                <DeleteForeverRoundedIcon className="delete-icon" size="1.3em"/>
            </div>
        </div>
    )
}

export default Note
