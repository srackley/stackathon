import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';


class SingleBook extends Component {
  render() {
    const i = this.props.match.params.bookId;
    const currentBook = this.props.books[i];
    console.log(currentBook);
    return (
      <div>
        <h1>{currentBook.title}</h1>
        <h2>{currentBook.author}</h2>
        <div>
          {currentBook.contents.map((sec, index) => (
            <Link key={index} to={`/${i}/${sec.id}`}>{sec.id.replace('_', ' ')}<br /></Link>
          ))}
        </div>
      </div>
    );
  }
}

const mapState = state => ({
  books: state.books
});

export default withRouter(connect(mapState)(SingleBook));
