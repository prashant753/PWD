
import firebase from 'firebase'
// Initialize Firebase
var config = {
  apiKey: 'AIzaSyDnFmsGYH08HjpDXeOM3pQjv1shcAX6UeY',
  authDomain: 'cropchat-ca482.firebaseapp.com',
  databaseURL: 'https://cropchat-ca482.firebaseio.com',
  projectId: 'cropchat-ca482',
  storageBucket: 'cropchat-ca482.appspot.com',
  messagingSenderId: '515197293417'
}
firebase.initializeApp(config)
export default {
  database: firebase.database()
}
