import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBrUdgNDr1th5DlSPPXRa3jwSyeyFQIlwY",
    authDomain: "lunch-rush-386c5.firebaseapp.com",
    databaseURL: "https://lunch-rush-386c5.firebaseio.com",
    projectId: "lunch-rush-386c5",
    storageBucket: "",
    messagingSenderId: "731361000777",
    appId: "1:731361000777:web:1809736c6f491356"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
