import React from 'react';
import classes from './NewNoteBtn.module.css'
import Notes from "../../store/notes";

const NewNoteBtn = () => {
    return (
        <div className={classes.newNoteBtn} onClick={() => Notes.addNote()}>
            <h1>+</h1>
            <p>Создать заметку</p>
        </div>
    );
};

export default NewNoteBtn;