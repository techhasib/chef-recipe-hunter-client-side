import { provider, githubprovider } from "../firebaseConfig";
// import {useState} from 'react';
import { signInWithPopup, signOut } from "firebase/auth";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Singin = () => {
  const auth = getAuth();
  const navigate = useNavigate();

  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [err, setErr] = useState("");

  const [setUser] = useState(" ");

  const handleGithubLogin = () => {
    signInWithPopup(auth, githubprovider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  let handleSubmit = () => {
    if (!email && !password) {
      setErr("Fill the all details!");
    } else if (!email) {
      setErr("Enter your email!");
    } else if (!password) {
      setErr("Enter your password!");
    } else if (password.length < 7) {
      setErr("Password need minimum 8 character!");
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          setErr("");
          navigate("/");
        })
        .catch((error) => {
          console.log(error.code);
          if (error.code === "auth/wrong-password") {
            setErr("Wrong password!");
          } else if (error.code === "auth/user-not-found") {
            setErr("Wrong email!");
          } else {
            setErr("");
          }
        });
    }
  };

  onAuthStateChanged(auth, (user) => {
    if (user) {
      navigate("/");
    }
  });
  const [setUse] = useState(null);
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const use = result.use;
        console.log(use);
        setUse(use);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSignOut = () => {
    signOut(auth).then((result) => {
      console.log(result);
      setUser(null);
    });
  };
  return (
    <div id="singup">
      <div className="singup">
        <h2>Sing In your account!</h2>
        <input
          required
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Enter your email"
        />
        <input
          required
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Enter your password"
        />
        <input required type="text" placeholder="Enter your Photo URL" />
        <p>{err}</p>
        <button onClick={handleSubmit}>Sign in</button>
        {/* <button onClick={handleSignOut}>Sign out</button> */}
        {/* {use ? (
          <>
            <button onClick={handleLogout}>LOGOUT</button>
            <h3>Welcome {use.displayName}</h3>
            <p>{use.email}</p>
            <div className="photo">
              <img src={use.photoURL} alt="dp" referrerPolicy="no-referrer" />
            </div>
          </>
        ) : ( */}
        <button onClick={handleGoogleSignIn}>Sign In With Google</button>
        <button onClick={handleGithubLogin}>Sign In With Github</button>
        {/* )} */}
        <Link to="/singup">You have don't account? Signup</Link>
      </div>
    </div>
  );
};

export default Singin;
