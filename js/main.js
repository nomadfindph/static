import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js';
import { getDatabase, ref, set } from 'https://www.gstatic.com/firebasejs/9.8.2/firebase-database.js';

import User from "./User.js";

const firebaseConfig = {
  apiKey: "AIzaSyAhUG66V4vHNyDAV0nZbjjBPMO2hIlmJ5s",
  authDomain: "nomadfindph-dd2ba.firebaseapp.com",
  databaseURL: "https://nomadfindph-dd2ba-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "nomadfindph-dd2ba",
  storageBucket: "nomadfindph-dd2ba.appspot.com",
  messagingSenderId: "942605152653",
  appId: "1:942605152653:web:1641ac3e1047be1c8e8dc4"
};

const app = initializeApp(firebaseConfig);

function signUp() {

    const fullname = document.querySelector("#singin-fullname").value;
    const username = document.querySelector("#singin-username").value;
    const email = document.querySelector("#singin-email").value;
    const password = document.querySelector("#singin-password").value;

    const db = getDatabase();
    const reference = ref(db, 'users/' + username);
    const newUser = new User(fullname, username, email, password);

    set(reference, newUser);
}

function logIn() {

    const username = document.querySelector("#login-username").value;
    const password = document.querySelector("#login-password").value;

    const db = getDatabase();
}

