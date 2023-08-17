import { useState } from "react";
import * as userService from "../utilities/users-service";

const LoginForm = ({setUser}) => {
  const [credentials, setCredentials] = useState({

    email: "",
    password: "",

  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
  setCredentials({...credentials, [e.target.name]: e.target.value})
    setError("");

  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await userService.login(credentials);
    setUser(user)
    } catch (error) {
      setError("Sign up Failed- Try Agian" );
      console.log(error)
    }

  };

 
  return (
    <div>
      <div className="form-container">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={credentials.email}
            onChange={handleChange}
            required
          />
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            required
          />
          <button type="submit" >
            LOGIN
          </button>
        </form>
      </div>
      <div className="error-message">&nbsp;{error}</div>
    </div>
  );
};

export default LoginForm;
