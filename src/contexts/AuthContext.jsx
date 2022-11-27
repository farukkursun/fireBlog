import React, { createContext, useEffect, useState } from "react";
import { userObserver } from "../helper/firebase";

export const AuthCont = createContext();

const AuthContext = ({children}) => {
  const [currentUser, setCurrentUser] = useState(false);

useEffect(() => {
  
userObserver(setCurrentUser)
  
}, [])


  return <AuthCont.Provider value={{ currentUser }}>
    {children}
  </AuthCont.Provider>;
};

export default AuthContext;
