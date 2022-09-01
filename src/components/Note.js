import React from "react";
import { showFormattedDate } from "../utils/getInitialData";

const Note = ({ note, onDelete, onArchived }) => {
  return (
    <div className="note">
      <div className="note-body">
        <span>{note.title}</span> <br />
        <span>{note.body}</span>
      </div>
      <div className="note-footer">
        <small>{showFormattedDate(note.createdAt)}</small>
        <div className="manage-note">
          <button className="note-delete" onClick={() => onDelete(note.id)}>Hapus</button>
          <button className="note-archived" onClick={() => onArchived(note.id)}>
            {" "}
            {note.archived ? "Pindahkan" : "Arsipkan"}{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Note;
