import Rebase from 're-base';
import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    apiKey: 'AIzaSyCQ9nD9FudRlVSKkn0VuFib2JZ0Wk8yGzE',
    authDomain: 'reactlearning-catchoftheday.firebaseapp.com',
    databaseURL: 'https://reactlearning-catchoftheday.firebaseio.com'
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
