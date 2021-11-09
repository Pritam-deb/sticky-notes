import React from 'react'
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
const Note = ({id, text, date}) => {
    return (
        <div className="note">
            <span>{text}</span>
            <div className="note-footer">
                <small>{date}</small>
                <DeleteForeverRoundedIcon className="delete-icon" size="1.3em"/>
            </div>
        </div>
    )
}

export default Note
