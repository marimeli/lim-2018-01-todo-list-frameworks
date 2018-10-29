import firebase from 'firebase/app';
import 'firebase/firestore';

firebase.initializeApp({
    apiKey: "AIzaSyCbeF6OLA2GvQ7M7JxAHCMwc0AeAd1V7v0",
    authDomain: "todo-app-lab.firebaseapp.com",
    projectId: "todo-app-lab",
});

let db = firebase.firestore();
db.settings({timestampsInSnapshots:true});

export default db;