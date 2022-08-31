import React from 'react';
import Note from "./Note";
import DataEmpty from "./DataEmpty";

const AktifNoteList = ({ notes, onDelete, onArchived }) => {
  const aktifNote = !notes.length
    ? []
    : notes.filter((note) => note.archived === false);
  return (
    <div className='section-note'>
      <h3 className='title-note'>Catatan Aktif</h3>
      {aktifNote.length === 0 ? (
        <DataEmpty />
      ) : (
        <div className="note-list">
          {aktifNote.map((note) => (
            <Note key={note.id} note={note} onDelete={onDelete} onArchived={onArchived} />
          ))}
        </div>
      )}
    </div>
  );
};
export default AktifNoteList;
