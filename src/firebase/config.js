import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyD6O2zlgZ_jMfMb6L8dspWiYpnldffE92s",
  authDomain: "mymoney-25196.firebaseapp.com",
  projectId: "mymoney-25196",
  storageBucket: "mymoney-25196.appspot.com",
  messagingSenderId: "852384498299",
  appId: "1:852384498299:web:21d9b02b4de75aa33d98de"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth,timestamp }