// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

import { getDatabase, onValue, push, ref, remove, set, update } from "firebase/database";
import { useEffect, useState } from "react";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId:process.env.REACT_APP_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// new user

export const createUser = async (email, password, navigate) => {
  try {
    const userCreat = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    navigate("/");
    console.log(userCreat);
  } catch (error) {
    alert(error.message);
  }
};

//  login yapma

export const signIn = async (email, password, navigate) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    navigate("/");
  } catch (error) {
    alert(error.message);
  }
};

// kullanicini sigin olup olmadigini takip ediyor
export const userObserver = (setCurrentUser) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const { email, displayName, photoURL } = user;
      setCurrentUser({ email, displayName, photoURL });
    } else {
      setCurrentUser(false);
      console.log("user logged out");
    }
  });
};

// logout yapma

export const logOut = () => {
  signOut(auth);
};

//google ile girme
export const signInWithGoogle = (navigate) => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result);
      navigate("/");
    })
    .catch((error) => {
      console.log(error);
    });
};

//possport unutulduysa
export const forgotPassword = (email) => {
  //? Email yoluyla şifre sıfırlama için kullanılan firebase metodu
  sendPasswordResetEmail(auth, email)
    .then(() => {
      // Password reset email sent!
      alert("please check your mail box");
    })
    .catch((error) => {
      console.log(error);
    });
};

// datebase olusturma

export const addUser = (tittle, image, content, user, newdate,navigate) => {
  const db = getDatabase(app);

  const userRef = ref(db, "users/");
  const newUserRef = push(userRef);

  set(newUserRef, {
    tittle: tittle,
    image: image,
    content: content,
    user: user,
    newdate: newdate,
  });
  navigate('/')
};

//veriyi ekrana yazma
export const useFetch = () => {
  const [isLoadIng, setIsLoading] = useState(true);
  const [blogList, setBlogList] = useState();
  useEffect(() => {
    const db = getDatabase(app);
    const userRef = ref(db, "users/");

    onValue(userRef, (snapshot) => {
      const data = snapshot.val();
      const userArray = [];

      for (let id in data) {
        userArray.push({ id, ...data[id] });
      }

      setBlogList(userArray);

      setIsLoading(false);
    
    });
  }, []);
  return { isLoadIng, blogList };
};

//veriyi silme

export const DeleteUser = (id,navigate) => {
  const db = getDatabase(app);
  remove(ref(db, "users/" + id));
  navigate('/')
  // Toastify('Deleted User')
};





// veriyi update etma

export const UpdateUser = (id, tittle,image,content,user,navigate) => {
  const db = getDatabase(app);
  // const userRef = ref(db, "users/");
  const updates = {};
  const heute=[new Date()]
const a=heute.join(' ')
console.log(a);
const newdate= a.slice(4,15)
  updates["users/" + id] = {id, image, tittle, content,user,newdate};
  navigate('/')
  return update(ref(db), updates);
  
};