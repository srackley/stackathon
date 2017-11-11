
import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyBNhoxXwjyOdZNAzXGGO6OhV89KU5_mrJo',
  authDomain: 'kindleshare-890d0.firebaseapp.com',
  databaseURL: 'https://kindleshare-890d0.firebaseio.com',
  projectId: 'kindleshare-890d0',
  storageBucket: 'kindleshare-890d0.appspot.com',
  messagingSenderId: '328428959553'
};

firebase.initializeApp(config);

const database = firebase.database();

export function writeBookData(id, title, author, contents, chapters) {
  firebase.database().ref(`books/${id}`).set({
    id,
    title,
    author,
    contents,
    chapters
  });
}
export default firebase;
