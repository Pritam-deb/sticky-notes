import React from 'react'
import { useState } from 'react';
import Button from '@mui/material/Button';
import { purple } from '@mui/material/colors';
import { styled } from '@mui/material/styles';

const AddNote = ({handleAddNote}) => {
    const ColorButton = styled(Button)(({ theme }) => ({
        color: theme.palette.getContrastText(purple[500]),
        backgroundColor: purple[500],
        '&:hover': {
          backgroundColor: purple[700],
        },
        transition: '0.4s',
        borderRadius: '10px',
      }));

      const [noteText, setnoteText] = useState('')
      const handleChange = (event) =>{
        setnoteText(event.target.value);
      }

      const handleClick = () => {
        if(noteText.trim().length > 0){
          handleAddNote(noteText)
          setnoteText("");
        }else{
          alert("cannot add empty note!")
          setnoteText("");
        }
      }

    return (
        <div className="note new">
            <textarea rows='8' cols='10' placeholder='type a new note!!' onChange={handleChange} value={noteText}></textarea>
            <div className="note-footer">
                <small>150 char remaining</small>
                <ColorButton variant="contained" size="small" onClick={handleClick}>Save</ColorButton>
            </div>
        </div>
    )
}

export default AddNote
