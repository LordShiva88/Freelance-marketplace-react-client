import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBuunh_QzRq_KIw-DOs4kuXwoKKcuzb-YA",
  authDomain: "freelance-bd.firebaseapp.com",
  projectId: "freelance-bd",
  storageBucket: "freelance-bd.appspot.com",
  messagingSenderId: "984472223145",
  appId: "1:984472223145:web:ee7a68f414632d530258b8",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
