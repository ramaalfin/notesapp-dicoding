import React from "react";

class AddNote extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      note: { title: "", body: "" },
      limitTitle: { inputTitle: "", limit: 50, karakter: 50 },
    };

    this.titleChangeEventHandle = this.titleChangeEventHandle.bind(this);
    this.bodyChangeEventHandle = this.bodyChangeEventHandle.bind(this);
    this.submitEventHandle = this.submitEventHandle.bind(this);
  }

  titleChangeEventHandle(event) {
    if (event.target.value.length <= 50) {
      this.setState((prevState) => {
        return {
          limitTitle: {
            ...prevState.limitTitle,
            inputTitle: event.target.value,
            karakter: prevState.limitTitle.limit - event.target.value.length,
          },

          note: {
            ...prevState.note,
            title: event.target.value,
          },
        };
      });
    }
  }

  bodyChangeEventHandle(event) {
    this.setState((prevState) => {
      return {
        ...prevState,
        note: {
          ...prevState.note,
          body: event.target.value,
        },
      };
    });
  }

  submitEventHandle(event) {
    event.preventDefault();
    this.props.addNote(this.state.note);
    this.setState((prevState) => {
      return {
        note: {
          title: "",
          body: ""
        },
        limitTitle: {
          ...prevState.limitTitle,
          inputTitle: "",
          karakter: 50,
        },
      };
    });
  }

  render() {
    return (
      <div className="note">
        <form onSubmit={this.submitEventHandle}>
          <input
            className="note-title"
            placeholder="title..."
            value={this.state.note.title}
            onChange={this.titleChangeEventHandle}
          /> 
          <small className="note-limit-title">{this.state.limitTitle.karakter} kalimat</small> <br />
          <textarea
            className="note-body"
            rows="8"
            placeholder="Deskripsi..."
            value={this.state.note.body}
            onChange={this.bodyChangeEventHandle}
          ></textarea>
          <div className="note-footer">
            <button className="simpan-note" type="submit">
              Simpan
            </button>
          </div>
        </form>
      </div>
    );
  }
}
export default AddNote;
