import firebase from 'firebase';
// Initialize Firebase
var config = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: ""
};

export const fire = firebase.initializeApp(config);
export const auth = fire.auth();

//sign up
export const createEmailPassword = (email, password) => {
   return auth.createUserWithEmailAndPassword(email, password);
}

//sign in
export const signIn = (email, password) => {
   return auth.signInWithEmailAndPassword(email, password);
}

//sign out
export const signOut = () => {
    return auth.signOut();
}

//password reset
export const passwordUpdate = (email) => {
    return auth.sendPasswordResetEmail(email);
}