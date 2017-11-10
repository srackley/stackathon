import React, { Component } from 'react';
import firebase from './firebase';

class Notes extends Component {
  constructor() {
    super();
    this.state = {
      currentNote: '',
      username: '',
      notes: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const notesRef = firebase.database().ref('notes');
    notesRef.on('value', (snapshot) => {
      const notes = snapshot.val();
      const newState = [];
      for (const note in notes) {
        newState.push({
          id: note,
          title: notes[note].title,
          user: notes[note].user
        });
      }
      this.setState({
        notes: newState
      });
    });
  }

  removeNote(noteId) {
    const noteRef = firebase.database().ref(`/notes/${noteId}`);
    noteRef.remove();
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    const notesRef = firebase.database().ref('notes');
    const note = {
      title: this.state.currentNote,
      user: this.state.username
    };
    notesRef.push(note);
    this.setState({
      currentNote: '',
      username: ''
    });
  }

  render() {
    return (
      <div className="app">
        <header>
          <div className="wrapper">
            <h1>Fun Book Friends</h1>

          </div>
        </header>
        <div className="container">
          <section className="add-note">
            <form onSubmit={this.handleSubmit}>
              <input type="text" name="username" placeholder="What's your name?" onChange={this.handleChange} value={this.state.username} />
              <input type="text" name="currentNote" placeholder="What's on your mind?" onChange={this.handleChange} value={this.state.currentNote} />
              <button>Add Note</button>
            </form>
          </section>
          <section className="display-note">
            <div className="wrapper">
              <ul>
                {this.state.notes.map(note => (
                  <li key={note.id}>
                    <h3>{note.title}</h3>
                    <p>brought by: {note.user}
                      <button onClick={() => this.removeNote(note.id)}>Remove Note</button>
                    </p>
                  </li>
                    ))}
              </ul>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
export default Notes;
