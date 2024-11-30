import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const handleToggle = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <div className="relative">
      <Header />
      <div>
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/2bcf01ee-7ef6-4930-b0d5-c6863853c461/web/IN-en-20241125-TRIFECTA-perspective_a47db038-756f-4f26-b1f7-cfc882b98746_medium.jpg"
          alt="background-image"
        />
      </div>
      <form className="flex flex-col p-12 max-w-[500px] my-16 w-full absolute top-20 mx-auto right-0 left-0 bg-[rgba(0,0,0,0.3)] backdrop-blur-sm rounded-md shadow-lg text-white">
        <h1 className="font-bold text-3xl mb-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        <input
          type="text"
          placeholder="Email Address"
          className="bg-transparent p-2 my-2 border border-white rounded-md w-full"
        ></input>
        <input
          type="text"
          placeholder="Password"
          className="bg-transparent p-2 my-2 border border-white rounded-md w-ful"
        ></input>
        {!isSignIn ? (
          <input
            type="text"
            placeholder="Confirm Password"
            className="bg-transparent p-2 my-2 border border-white rounded-md w-ful"
          ></input>
        ) : null}
        <button className="py-3 mt-4 bg-red-700 w-full rounded-md">
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="my-6 cursor-pointer" onClick={handleToggle}>
          {isSignIn
            ? "New to Netflix? Sign Up Now!"
            : "Already Have an Account? Sign In Now!"}
        </p>
      </form>
    </div>
  );
};

export default Login;
