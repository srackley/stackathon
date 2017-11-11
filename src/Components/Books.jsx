import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from '../firebase';

class Books extends Component {
  constructor() {
    super();
    this.state = {
      books: []
    };
  }

  componentWillMount() {
    const booksRef = firebase.database().ref('books');
    booksRef.orderByChild('author').on('value', (snapshot) => {
      const books = snapshot.val();
      const newState = [];
      books.forEach(book =>
        newState.push({
          id: book.id,
          title: book.title,
          author: book.author,
        }));
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
                <Link key={book.id} to={`/books/${book.id}`}>
                  <div className="singleBook">
                    <li>
                      <h3>{book.title}</h3>
                      <p>{book.author}
                      </p>
                    </li>
                  </div>
                </Link>
                    ))}
            </ul>
          </section>
        </div>
      </div>
    );
  }
}

export default Books;
