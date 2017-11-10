import React, { Component } from 'react';
import firebase from './firebase';

class Books extends Component {
  constructor() {
    super();
    this.state = {
      currentBook: '',
      author: '',
      books: []
    };
  }

  componentDidMount() {
    const booksRef = firebase.database().ref('books');
    booksRef.on('value', (snapshot) => {
      const books = snapshot.val();
      const newState = [];
      for (const book in books) {
        newState.push({
          id: book,
          title: books[book].title,
          author: books[book].author,
        });
      }
      this.setState({
        books: newState
      });
    });
  }

  render() {
    return (
      <div className="app">
        <div>
          <section className="display-book">
            <ul className="flex-grid">
              {this.state.books.map(book => (
                <div className="singleBook">
                  <li key={book.id}>
                    <h3>{book.title}</h3>
                    <p>{book.author}
                    </p>
                  </li>
                </div>
                    ))}
            </ul>
          </section>
        </div>
      </div>
    );
  }
}
export default Books;
