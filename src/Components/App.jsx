import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router';
import Books from './Books';
import SingleBook from './SingleBook';
import { fetchBooks } from '../store/reducers/books';

import('./index.css');

class App extends Component {
  componentWillMount() {
    this.props.onLoad();
  }


  render() {
    return (
      <Switch>
        <Route exact path="/:bookId" component={SingleBook} />
        <Route exact path="/" component={Books} />
      </Switch>
    );
  }
}

const mapState = null;

const mapDispatch = dispatch => ({
  onLoad() {
    dispatch(fetchBooks());
  }
});

export default withRouter(connect(mapState, mapDispatch)(App));
