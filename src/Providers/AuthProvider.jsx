import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from "../Firebase/firebase.config";

const auth = getAuth(app);

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser =( email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
  }

  const signIn =(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword( auth, email,password)
  }
  const logOut=()=>{
    setLoading(true)
    return signOut(auth)
  }
  const updateUserPhoto =(name,photo)=>{
    return updateProfile(auth.currentUser, {
      displayName: name, photoURL: photo
  })
  }


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log(currentUser);
      setLoading(false);
    });
    return () => {
      return unsubscribe();
    };
  }, []);



  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    logOut,
    updateUserPhoto
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
