import React, { Component } from 'react';
import firebase from '../firebase';


class SingleBook extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    const { bookId } = this.props.match.params;
    const booksRef = firebase.database().ref('books');
    const currentRef = booksRef.child(bookId);
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

export default SingleBook;
