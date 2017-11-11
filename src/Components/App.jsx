import React from 'react';
import { Route, Switch } from 'react-router';
import epub from '../epub';
import firebase from '../firebase';
import Notes from './Notes';
import Books from './Books';
import Authors from './Authors';
import Chapters from './Chapters';
import SingleBook from './SingleBook';

import('../index.css');

export default () => (
  <Switch>
    <Route exact path="/" component={Authors} />
    <Route exact path="/books/:bookId/:chapter" component={Chapters} />
    <Route exact path="/books/:bookId" component={SingleBook} />
    <Route exact path="/books" component={Books} />
  </Switch>
);
