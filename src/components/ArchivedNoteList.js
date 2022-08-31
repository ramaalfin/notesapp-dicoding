import React from 'react';
import Note from "./Note";
import DataEmpty from "./DataEmpty";

const ArchivedNoteList = ({ notes, onDelete, onArchived }) => {
  const archivedNote = !notes.length
    ? []
    : notes.filter((note) => note.archived === true);

  return (
    <div className='section-note'>
      <h3 className='title-note'>Arsip Catatan</h3>
      {archivedNote.length === 0 ? (
        <DataEmpty />
      ) : (
        <div className="note-list">
          {archivedNote.map((note) => (
            <Note key={note.id} note={note} onDelete={onDelete} onArchived={onArchived} />
          ))}
        </div>
      )}
    </div>
  );
};
export default ArchivedNoteList;
