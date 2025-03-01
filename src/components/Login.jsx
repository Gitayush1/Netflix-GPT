import React, { useState } from "react";
import Header from "./Header";

const Login = () => {

  const [isSignIn , setIsSignIn] = useState(true)

  const toggleHandler = () => {
    setIsSignIn(!isSignIn)
  }

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/638e9299-0637-42d1-ba39-54ade4cf2bf6/web/IN-en-20250203-TRIFECTA-perspective_46eb8857-face-4ea6-b901-dbf22b461369_large.jpg" />
      </div>
      <form className="mt-40 h-120 rounded-lg w-100 mx-auto right-0 left-0 absolute bg-black opacity-87 p-12 text-white pr-16">
        <h1 className="px-2 mb-4 font-bold text-3xl">{isSignIn ? "Sign In" : "Sign Up"}</h1>
        {!isSignIn ? <input
          type="text"
          placeholder="Enter your name"
          className="p-3 m-2 border bg-gray-950 border-white w-full"
        /> : ""}
        <input
          type="password"
          placeholder="Email"
          className="p-3 m-2 border bg-gray-950 border-white w-full"
        />
        <input
          type="text"
          placeholder="Password"
          className="p-3 m-2 border bg-gray-950 border-white w-full"
        />
        <button className="p-2 m-2 rounded font-bold bg-red-700 w-full">
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <div className="flex p-2">
          <p>{isSignIn ? "New to Netflix ?" : "Already a user ? "} </p>
          <p onClick={toggleHandler} className="px-1 cursor-pointer font-bold"> {isSignIn ? "Sign Up now" : "Sign In now"}</p>
        </div>
      </form>
    </div>
  );
};

export default Login;
