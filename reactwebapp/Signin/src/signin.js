import React, { useState } from 'react';
import './signin.css';

const App = () => {
  const [formData, setFormData] = useState({
    user_name: '',
    password: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    validate();
  };

  const validate = () => {
    if (formData.user_name === '') {
      alert('Please enter the user name');
      return false;
    }
    if (formData.password === '') {
      alert('Please enter the password');
      return false;
    }
    return true;
  };

  return (
    <div className="wrapper">
      <header>Sign In Form</header>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <div className="input-area">
            <input
              type="text"
              id="username"
              name="user_name"
              placeholder="User name"
              value={formData.user_name}
              onChange={handleInputChange}
            />
            <i className="icon fas fa-envelope"></i>
          </div>
        </div>
        <div className="field">
          <div className="input-area">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
            />
            <i className="icon fas fa-lock"></i>
          </div>
        </div>
        <div className="pass-txt">
          <a href="#">Forgot password?</a>
        </div>
        <input type="submit" id="submit" value="Sign in" />
      </form>
      <div className="sign-txt">
        Not a member yet? <a href="#">Signup now</a>
      </div>
    </div>
  );
};

export default App;
