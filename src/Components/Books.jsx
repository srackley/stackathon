import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import books from '../epub';

class Books extends Component {
  constructor() {
    super();
    this.state = {
      books: []
    };
  }

  render() {
    return (
      <div className="app">
        <div>
          <section className="display-book">
            <ul className="flex-grid">
              {books.map(book => (
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
