import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';


class SingleBook extends Component {
  render() {
    const i = this.props.match.params.bookId;
    const currentBook = this.props.books[i];
    return (
      <div>
        <div className="center">
          <h1>{currentBook.title}</h1>
          <h2>{currentBook.author}</h2>
          <div id="chapters">
            {currentBook.contents.map((sec, index) => (
              <Link key={index} to={`/${i}/${sec.id}`}><div className="chapter">{sec.id.replace('_', ' ')}</div><br /></Link>
          ))}
          </div>
        </div>
      </div>
    );
  }
}

const mapState = state => ({
  books: state.books
});

export default withRouter(connect(mapState)(SingleBook));
