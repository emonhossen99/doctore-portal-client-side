// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey : process.env.REACT_APP_API_KEY,
  authDomain : process.env.REACT_APP_AUTH_DOMAIN,
  projectId : process.env.REACT_APP_PROJECT_ID ,
  storageBucket : process.env.REACT_APP_STORAGR_BUCKET, 
  messagingSenderId : process.env.REACT_APP_ID,
  appId : process.env.REACT_APP_APP_ID, 
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
 
export default auth;



// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyC9WxYa1YX8GTfVpVVetrGIStwu9NxuLOs",
//   authDomain: "doctors-portal-329f7.firebaseapp.com",
//   projectId: "doctors-portal-329f7",
//   storageBucket: "doctors-portal-329f7.appspot.com",
//   messagingSenderId: "52796959152",
//   appId: "1:52796959152:web:ef847752934557fc920e75"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app)

// export default auth;
