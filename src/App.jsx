import {
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
import auth from "./utils/firebaseConfig";
import "./App.css";
import { signInWithPopup } from "firebase/auth";

function App() {
  const signInWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);

      console.log("User google name:", result.user.displayName);
      console.log("User google email", result.user.email);
      console.log("User google Photo", result.user.photoURL);
    } catch (error) {
      console.log(error);
    }
  };

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
    <>
      <h1>Welcome back</h1>
      <p>Proceed to application by:</p>
      <div className="social_sign_in">
        <button onClick={signInWithGoogle}>Sign in with Google</button>
        <button onClick={signInWithFacebook}>Sign in with Facebook</button>
      </div>
    </>
  );
}

export default App;
