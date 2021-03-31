import Firebase from "firebase";

const firebaseConfig = {
  apiKey: 'AIzaSyALiyBpSuhn7t28Z5WwX3CMAHPrfmJ2qjs',
  databaseURL: "https://mychat-b7b82-default-rtdb.firebaseio.com/",
  projectId: "mychat-b7b82",
  appId: "1:696017394634:android:2c3b2e7c696075ded68d33",
};

export default Firebase.initializeApp(firebaseConfig);
