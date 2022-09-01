import React from "react";
import { nanoid } from "nanoid";
import { getInitialData } from "../utils/getInitialData";
import AddNote from "./AddNote";
import AktifNoteList from "./AktifNoteList";
import ArchivedNoteList from "./ArchivedNoteList";
import Header from "./Header";
import Search from "./Search";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
      cariNotes: getInitialData(),
    };

    this.addNoteHandle = this.addNoteHandle.bind(this);
    this.deleteNoteHandle = this.deleteNoteHandle.bind(this);
    this.searchTitleHandle = this.searchTitleHandle.bind(this);
    this.archiveNoteHandle = this.archiveNoteHandle.bind(this);
  }

  addNoteHandle({ title, body }) {
    const date = new Date();
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: nanoid(),
            title,
            body,
            archived: false,
            createdAt: date.toLocaleDateString(),
          },
        ],
        cariNotes: [
          ...prevState.cariNotes,
          {
            id: nanoid(),
            title,
            body,
            archived: false,
            createdAt: date.toLocaleDateString(),
          },
        ],
      };
    });
  }

  deleteNoteHandle(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    const cariNotes = this.state.cariNotes.filter((note) => note.id !== id);
    this.setState({
      notes: notes,
      cariNotes: cariNotes,
    });
  }

  searchTitleHandle(event) {
    this.setState((prevState) => {
      return {
        cariNotes: prevState.notes.filter((note) =>
          note.title.toLowerCase().includes(event.target.value.toLowerCase())
        ),
      };
    });
  }

  archiveNoteHandle(id) {
    this.setState((prevState) => {
      return {
        notes: prevState.notes.map((note) =>
          note.id === id ? { ...note, archived: !note.archived } : note
        ),
        cariNotes: prevState.cariNotes.map((note) =>
          note.id === id ? { ...note, archived: !note.archived } : note
        ),
      };
    });
  }

  render() {
    return (
      <div className="container">
        <Header />
        <Search cari={this.searchTitleHandle} />
        <AddNote addNote={this.addNoteHandle} />
        <div className="container-note">
          <AktifNoteList
            notes={this.state.cariNotes}
            onDelete={this.deleteNoteHandle}
            onArchived={this.archiveNoteHandle}
          />
          <ArchivedNoteList
            notes={this.state.cariNotes}
            onDelete={this.deleteNoteHandle}
            onArchived={this.archiveNoteHandle}
          />
        </div>
      </div>
    );
  }
}

export default App;
