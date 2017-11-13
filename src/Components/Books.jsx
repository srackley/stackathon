import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

class Books extends Component {
  render() {
    return (
      <div className="app center">
        <h1>Palimpsest</h1>
        <h2>A socially connected e-Reader for sharing <br /> your favorite quotes, notes, and comments with friends and strangers. </h2>
        <p> Let everyone know how much you hated the ending of The Goldfinch <br /> and that you definitely adored The Great Gatsby. <br /> Wow, the American Dream, jazz, and melodrama. <br /> What's not to love?</p>
        <br />
        <div>
          <section className="display-book">
            <ul className="flex-grid">
              {
                this.props.books.map((book, i) => (
                  <Link key={i} to={`/${i}`}>
                    <div className="singleBook card-1">
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
