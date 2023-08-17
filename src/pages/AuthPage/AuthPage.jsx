import {useState} from "react"
import SignUpForm from "../../components/SignUpForm"
import LoginForm from "../../components/LoginForm"

const AuthPage = ({setUser}) => {
    const [showSignUp, setShowSignUp] = useState(false);
  return (
    <div>
      <h1>Auth Page</h1>
      <button onClick={() => setShowSignUp(!showSignUp)}>
        {showSignUp ? "Log In" : "Sign Up"}
      </button>
      {showSignUp ? (
        <SignUpForm setUser={setUser} />
      ) : (
        <LoginForm setUser={setUser} />
      )}
    </div>
  );
}

export default AuthPage