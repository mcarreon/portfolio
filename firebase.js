import firebase from "firebase/app";
import 'firebase/firestore';

const config = {
  apiKey: "AIzaSyAveOXHTsNxvho6NK5eaAFKnUSgw4obq-M",
  authDomain: "personal-portfolio-2c440.firebaseapp.com",
  databaseURL: "https://personal-portfolio-2c440.firebaseio.com",
  projectId: "personal-portfolio-2c440",
  storageBucket: "personal-portfolio-2c440.appspot.com",
  messagingSenderId: "533684567157",
  appId: "1:533684567157:web:f55c698b12d637cb"
};

export default !firebase.apps.length ? firebase.initializeApp(config).firestore() : firebase.app().firestore();