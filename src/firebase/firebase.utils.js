import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCaMejqbXfAjX7VUA8xtPHM6zQCUx9NsP8',
  authDomain: 'crwn-db-59171.firebaseapp.com',
  databaseURL: 'https://crwn-db-59171.firebaseio.com',
  projectId: 'crwn-db-59171',
  storageBucket: '',
  messagingSenderId: '983779660765',
  appId: '1:983779660765:web:cc48873f458327bf'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
