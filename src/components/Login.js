import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  updateProfile,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BACKGROUND, USER_PROFILE } from "../utils/constants";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const handleToggle = () => {
    setIsSignIn(!isSignIn);
  };

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const confirmPassword = useRef(null);

  const handleButtonClick = () => {
    // Validate the form data
    const emailValue = email.current?.value;
    const passwordValue = password.current?.value;
    const confirmPasswordValue = confirmPassword.current?.value;
    const message = checkValidData(
      emailValue,
      passwordValue,
      confirmPasswordValue
    );
    setErrorMessage(message);
    if (message) return;
    if (!isSignIn) {
      // sign up logic
      createUserWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: name.current.value,
            photoURL: USER_PROFILE,
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: USER_PROFILE,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              // ...
            });
        })
        .catch((error) => {
          setErrorMessage(`${error.code} - ${error.message}`);
        });
    } else {
      // Sign in logic
      signInWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          setErrorMessage(`${error.code} - ${error.message}`);
        });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleButtonClick();
  };
  return (
    <div className="relative">
      <Header />
      <div>
        <img src={BACKGROUND} alt="background-image" />
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col p-12 max-w-[500px] my-16 w-full absolute top-20 mx-auto right-0 left-0 bg-[rgba(0,0,0,0.3)] backdrop-blur-sm rounded-md shadow-lg text-white"
      >
        <h1 className="font-bold text-3xl mb-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn ? (
          <input
            ref={name}
            type="text"
            placeholder="Enter user Name"
            className="bg-transparent p-2 my-2 border border-white rounded-md w-ful"
          ></input>
        ) : null}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="bg-transparent p-2 my-2 border border-white rounded-md w-full"
        ></input>
        <input
          ref={password}
          type="text"
          placeholder="Password"
          className="bg-transparent p-2 my-2 border border-white rounded-md w-ful"
        ></input>
        {!isSignIn ? (
          <input
            ref={confirmPassword}
            type="text"
            placeholder="Confirm Password"
            className="bg-transparent p-2 my-2 border border-white rounded-md w-ful"
          ></input>
        ) : null}
        <p className="text-red-500">{errorMessage}</p>
        <button
          className="py-3 mt-4 bg-red-700 w-full rounded-md"
          onClick={handleButtonClick}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="my-6 cursor-pointer w-fit" onClick={handleToggle}>
          {isSignIn
            ? "New to Netflix? Sign Up Now!"
            : "Already Have an Account? Sign In Now!"}
        </p>
      </form>
    </div>
  );
};

export default Login;
