import firebase from 'firebase/app'
import 'firebase/firestore'
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: "steve-stocks-c6112.firebaseapp.com",
    databaseURL: "https://steve-stocks-c6112.firebaseio.com",
    projectId: "steve-stocks-c6112",
    storageBucket: "steve-stocks-c6112.appspot.com",
    messagingSenderId: "789091131320",
    appId: "1:789091131320:web:f5421ac9a529dc8edcb94d",
    measurementId: "G-HZPJSYZ0BF"
  };

//   initialize firebase
  firebase.initializeApp(firebaseConfig);



  export default firebase