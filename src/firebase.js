import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import { getDatabase } from "firebase/database";


const app = firebase.initializeApp({
  apiKey: "AIzaSyD8lMDdsB7CfQK4tEZe0kISABxyIWf1xn8",
  authDomain: "jdc-website-fc8f0.firebaseapp.com",
  databaseURL: "https://jdc-website-fc8f0-default-rtdb.firebaseio.com",
  projectId: "jdc-website-fc8f0",
  storageBucket: "jdc-website-fc8f0.appspot.com",
  messagingSenderId: "19287487613",
  appId: "1:19287487613:web:b086b81fcd5f7d31a4ed14"
})

// const config = {
//     apiKey: "<YOUR-API-KEY>",
//     authDomain: "<YOUR-AUTH-DOMAIN>",
//     databaseURL: "<YOUR-DATABASE-URL>",
//     projectId: "<YOUR-PROJECT-ID>",
//     storageBucket: "<YOUR-STORAGE-BUCKET>",
//     messagingSenderId: "<YOUR-MESSAGE-SENDER-ID>",
//     appId: "<YOUR-APP-ID>"
//   };
  
//   let firebaseCache;
  
// //   export const getFirebase = () => {
// //     // if (firebaseCache) {
// //     //   return firebaseCache;
// //     // }
  
// //     // firebase.initializeApp(config);
// //     firebaseCache = firebase;
// //     return firebase;
// //   };


export const database = getDatabase();
export const auth = app.auth()
// export const database = app.database()
export default app

//export const database = getDatabase(app);

// import firebase from "firebase/app"
// import "firebase/auth"

// const app = firebase.initializeApp({
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID
// })

// export const auth = app.auth()
// export default app