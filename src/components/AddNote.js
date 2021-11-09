import React from 'react'
import Button from '@mui/material/Button';
import { purple } from '@mui/material/colors';
import { styled } from '@mui/material/styles';

const AddNote = () => {
    const ColorButton = styled(Button)(({ theme }) => ({
        color: theme.palette.getContrastText(purple[500]),
        backgroundColor: purple[500],
        '&:hover': {
          backgroundColor: purple[700],
        },
        transition: '0.4s',
        borderRadius: '10px',
      }));
    return (
        <div className="note new">
            <textarea rows='8' cols='10' placeholder='type a new note!!'></textarea>
            <div className="note-footer">
                <small>150 char remaining</small>
                <ColorButton variant="contained" size="small">Save</ColorButton>
            </div>
        </div>
    )
}

export default AddNote
