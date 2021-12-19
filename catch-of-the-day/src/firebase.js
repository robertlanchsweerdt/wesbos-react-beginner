import Rebase from 're-base'; // react firebase specific package that allows us to mirror state to firebase
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyDX3iUigMK7EXlFXUz1eTacFh_GlBgEBD4',

  authDomain: 'beginner-react-wes-bos-lanch.firebaseapp.com',

  databaseURL:
    'https://beginner-react-wes-bos-lanch-default-rtdb.firebaseio.com',
});

const base = Rebase.createClass(firebaseApp.database());

export { firebase };
export default base;
