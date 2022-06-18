import firebase from "firebase";
require("@firebase/firestore");
const firebaseConfig = {
    apiKey: "AIzaSyDFa_qt0i_8g2dy-C0siA1fnKwzWHn0_2w",
    authDomain: "c-71-e-library-4eaf5.firebaseapp.com",
    projectId: "c-71-e-library-4eaf5",
    storageBucket: "c-71-e-library-4eaf5.appspot.com",
    messagingSenderId: "1065937624047",
    appId: "1:1065937624047:web:e962c2ebad5f7a6380f41a",
    measurementId: "G-L90V357L2K"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
