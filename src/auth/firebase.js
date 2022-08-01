import { initializeApp } from "firebase/app";
import store from "../store";
import { loginUser, logoutUser } from "../store/auth";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAİN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth();

// New user add function
export const register = async (email, password, displayName, navigate) => {
  try {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    await updateProfile(auth.currentUser, { displayName: displayName });
    alert("SignUp Completed Success");
    navigate("/");
    return user;
  } catch (error) {
    console.log(error);
  }
};

export const login = async (email, password) => {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    loginUser(user);
    alert("Login Success");
    console.log(user);
    return user;
  } catch (error) {
    console.log(error.message);
  }
};

export const logout = async () => {
  try {
    const { user } = await signOut(auth);
    console.log(user);
    return true;
  } catch (error) {
    console.log("Logouted");
  }
};

onAuthStateChanged(auth, (user) => {
  if (user) {
    store.dispatch(loginUser(user));
  } else {
    store.dispatch(logoutUser());
  }
});

export const signUpGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result);
     
      alert("Logged out successfully!");
    })
    .catch((error) => {
      console.log(error);
    });
};

export default app;
