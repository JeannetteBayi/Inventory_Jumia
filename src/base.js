import Rebase from 're-base'
import firebase from 'firebase'

const firebaseApp = firebase.initializeApp ({
    apiKey: "AIzaSyDGBUC1kILzlxtYHxRr4LUBYdujuzioPwk",
    authDomain: "catch-of-the-day-jeannette.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-jeannette.firebaseio.com",
})

const base = Rebase.createClass(firebaseApp.database())

// this a named export
export  {firebaseApp}

// this a default export 
export default base