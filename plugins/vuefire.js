import VueFire from 'vuefire';
import firebase from 'firebase/app';
import 'firebase/firestore';
import Vue from 'vue';

Vue.use(VueFire)
firebase.initializeApp({
  apiKey: "AIzaSyDVoPMntoF58QetAGu2Z-CMZz4bcthQrd0",
  authDomain: "intelecttio-vue.firebaseapp.com",
  databaseURL: "https://intelecttio-vue.firebaseio.com",
  projectId: "intelecttio-vue",
  storageBucket: "intelecttio-vue.appspot.com",
  messagingSenderId: "471886115654"
})

const firestore = firebase.firestore();
const settings = {timestampsInSnapshots: true};
firestore.settings(settings);
export const db = firebase.firestore()
