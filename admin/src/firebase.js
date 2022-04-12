import firebase from 'firebase';
// import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyD51E2SJHSUOlIORCFobKJ3_iC40a79-p8',
  authDomain: 'bingeit-26e0b.firebaseapp.com',
  projectId: 'bingeit-26e0b',
  storageBucket: 'bingeit-26e0b.appspot.com',
  messagingSenderId: '947176540010',
  appId: '1:947176540010:web:a1ce64c9633b9a6cd74713',
  measurementId: 'G-YJB7FWRDS7',
};
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;
