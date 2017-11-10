import React from 'react';
import Routes from 'react-router';
import epub from '../epub';
import firebase from '../firebase';
import Notes from './Notes';
import Books from './Books';

import('../index.css');

export default () => (
  <div>
    <Notes />
    <Books />
  </div>
);
