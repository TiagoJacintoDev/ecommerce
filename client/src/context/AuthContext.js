import { createContext, useContext, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateEmail,
  updatePassword,
} from "firebase/auth";
import { auth } from "../configs/firebase";

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  function createUser(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logout() {
    return signOut(auth);
  }

  function changeEmail(email) {
    return updateEmail(user, email);
  }

  function changePassword(password) {
    return updatePassword(user, password);
  }

  function authenticate() {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }

  return (
    <UserContext.Provider
      value={{
        createUser,
        user,
        logout,
        logIn,
        changeEmail,
        changePassword,
        authenticate,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(UserContext);
};
