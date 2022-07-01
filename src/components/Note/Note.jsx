import React from 'react';
import Notes from "../../store/notes";
import {observer} from "mobx-react-lite";
import classes from "./Note.module.css";

const Note = observer(({note}) => {
    return (
        <div className={classes.noteContainer}>
            {
                note.isEditing
                    ?
                    <div className={classes.noteEditor}
                         onClick={event => event.stopPropagation()}
                    >
                        <div className={classes.noteEditor__header}>
                            <input
                                type="text"
                                value={note.category}
                                onChange={event => Notes.changeNoteCategory(note, event.target.value)}
                                placeholder={'Категория...'}
                            />
                        </div>
                        <div className={classes.noteEditor__body}>
                            <textarea
                                rows="10"
                                value={note.text}
                                onChange={event => Notes.changeNote(note, event.target.value)}
                                placeholder={'Текст...'}
                            />
                            <button onClick={() => Notes.toggleNote(note)}>Сохранить</button>
                        </div>
                    </div>
                    :
                    <div className={classes.note} onClick={() => Notes.toggleNote(note)}>
                        <div className={classes.note__header}>
                            <p className={classes.note__category}>{note.category ? note.category : 'Без категории' }</p>
                            <button
                                onClick={event => {
                                    event.stopPropagation()
                                    Notes.removeNote(note)
                                }}
                                className={classes.note__deleteBtn}>Удалить</button>
                        </div>
                        <div className={classes.note__text}>
                            <p>{note.text}</p>
                        </div>
                    </div>
            }
        </div>
    );
});

export default Note;