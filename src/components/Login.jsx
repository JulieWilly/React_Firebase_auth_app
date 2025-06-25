import { GoogleAuthProvider, FacebookAuthProvider, signInWithRedirect } from "firebase/auth";
import { signInWithPopup } from "firebase/auth";
import auth from "../utils/firebaseConfig";
import { useDispatch } from "react-redux";
import { getRedirectResult } from "firebase/auth";

import { setAuthState } from "../store/countSlice";
import { Navigate, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  

//   const signInWithGoogle = async () => {
//     try {
//       const provider = new GoogleAuthProvider();
//       const result = await signInWithRedirect(auth, provider);

//       console.log("data", result);
//       console.log("User google name:", result.user.displayName);
//       console.log("User google email", result.user.email);
//       console.log("User google Photo", result.user.photoURL);
//       console.log('data', result.user);

//       dispatch(
//         setAuthState({
//           user: {
//             name: result.user.displayName,
//             email: result.user.email,
//             photoURL: result.user.photoURL,
//             uid: result.user.uid,
//           },
//         })
//       );

// if (result) {
//   <Navigate to={"/dashboard"} />;
// }
//     } catch (error) {
//       console.log(error);
//     }
//   };


const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  await signInWithRedirect(auth, provider);
};

useEffect(() => {
  getRedirectResult(auth)
    .then((result) => {
      if (result) {
        const user = result.user;
        console.log('data', user);
        dispatch(
          setAuthState({
            user: {
              name: user.displayName,
              email: user.email,
              photoURL: user.photoURL,
              uid: user.uid,
            },
          })
        );
        navigate("/dashboard"); // use useNavigate from react-router-dom
      }
    })
    .catch((error) => {
      console.log("Redirect error:", error);
    });
}, [auth]);
  const signInWithFacebook = async () => {
    try {
      const provider = new FacebookAuthProvider();
      const result = await signInWithPopup(auth, provider);

      console.log("User facebook name:", result.user.displayName);
      console.log("User facebook email:", result.user.email);
      console.log("User facebook photo", result.user.photoURL);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Welcome back</h1>
      <div className="flex flex-col space-y-4 w-full max-w-sm mx-auto mt-6">
        <button
          onClick={signInWithGoogle}
          className="w-full py-2 px-4 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition"
        >
          Sign in with Google
        </button>
        <button
          onClick={signInWithFacebook}
          className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          Sign in with Facebook
        </button>
      </div>
    </div>
  );
};

export default Login;
