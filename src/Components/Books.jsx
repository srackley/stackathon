import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

class Books extends Component {
  render() {
    return (
      <div className="app">
        <div>
          <section className="display-book">
            <ul className="flex-grid">
              {
                this.props.books.map((book, i) => (
                  <Link key={i} to={`/${i}`}>
                    <div className="singleBook">
                      <li>
                        <h3>{book.title}</h3>
                        <h4>{book.author}</h4>
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

const mapState = state => ({
  books: state.books
});

export default withRouter(connect(mapState)(Books));
