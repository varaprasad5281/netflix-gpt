import React, { useEffect } from "react";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES, USER_PROFILE } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const selector = useSelector((store) => store.gpt.showGptSearch);

  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: USER_PROFILE || photoURL,
          })
        );
        // ...
        navigate("/browse");
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/");
      }
    });
    // Unmounting stage
    return () => unsubscribe();
  }, []);
  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };
  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  return (
    <div className="z-50 fixed top-0 w-full md:px-8 py-2 bg-black sm:bg-black md:bg-gradient-to-b from-black flex flex-col items-center md:flex-row md:justify-between">
      <a href="/">
        <img className="w-44 cursor-pointer" src={LOGO} alt="logo" />
      </a>
      {user && (
        <div className="flex items-center gap-3 md:w-auto text-white font-bold justify-between sm:w-full">
          {selector && (
            <select
              className="p-2 bg-gray-600 text-white hidden sm:block"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => {
                return (
                  <option key={lang.identifier} value={lang.identifier}>
                    {lang.name}
                  </option>
                );
              })}
            </select>
          )}

          <button
            className="px-4 py-2 bg-purple-600 rounded-md"
            onClick={handleGptSearchClick}
          >
            {selector ? "Move to Main" : "GPT Search"}
          </button>

          <img
            className="w-12 h-12 rounded-[50%]"
            src={user?.photoURL}
            alt="user"
          ></img>
          <button
            className="bg-red-600 px-4 py-2 rounded-md"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
