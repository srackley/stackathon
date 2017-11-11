import React, { Component } from 'react';
import firebase from '../firebase';


class Chapter extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    const { chapter } = this.props.match.params;
    const booksRef = firebase.database().ref('books');
    const currentRef = booksRef.child(chapter);
    currentRef.on('value', (snap) => {
      const book = snap.val();
      this.setState(book);
    });
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <h1>{this.state.title}</h1>
        <h2>{this.state.author}</h2>
      </div>
    );
  }
}

export default Chapter;
