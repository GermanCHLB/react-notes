import React from 'react';
import {observer} from "mobx-react-lite";
import Note from "./Note/Note";
import Notes from "../store/notes";
import NewNoteBtn from "./NewNoteBtn/NewNoteBtn";

const NoteList = observer(() => {
    return (
        <div className="noteList">
            {
                Notes.sortedAndSearchedNotes.map(note => <Note key={note.id} note={note}/>)
            }
            <NewNoteBtn/>
        </div>
    );
});

export default NoteList;