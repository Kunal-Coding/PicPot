import React, { useContext, useState } from "react";
import { LoginContext } from "../../common/components/context";
import "./Login.css";

const Login = () => {
  const loggedin = useContext(LoginContext);
  const [error, setError] = useState(null);
  const [formType, setFormType] = useState("login");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    phonenumber: "",
  });

  const toggleForm = (type) => {
    setFormType(type);
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    setError(null);

    try {
      let url = "http://localhost:5000/api/users/login";
      if (formType === "signup") {
        url = "http://localhost:5000/api/users/signup";
      }

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const responseData = await response.json();
      console.log("login/signup response:", responseData);

      if (!response.ok) {
        throw new Error(responseData.message);
      }

      loggedin.login(responseData.message._id);
    } catch (err) {
      alert(err.message);
      setError(err.message);
    }
  };

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="container">
      <div className="form-container">
        <ul className="tab-group">
          <li>
            <button
              className={`${formType === "signup" ? "active" : ""}`}
              onClick={() => toggleForm("signup")}
            >
              Sign Up
            </button>
          </li>
          <li>
            <button
              className={`${formType === "login" ? "active" : ""}`}
              onClick={() => toggleForm("login")}
            >
              Log In
            </button>
          </li>
        </ul>

        {formType === "login" ? (
          <div>
            <form onSubmit={submitHandler}>
              <div className="form-control">
                <p>Welcome Back!</p>
                <label>
                  Email
                  <input
                    name="email"
                    type="email"
                    required
                    onChange={changeHandler}
                  />
                </label>
              </div>

              <div className="form-control">
                <label>
                  Password
                  <input
                    name="password"
                    type="password"
                    required
                    onChange={changeHandler}
                  />
                </label>
              </div>
              <div className="form-control">
                <button>Log In</button>
              </div>
            </form>
          </div>
        ) : (
          <div>
            <form onSubmit={submitHandler}>
              <div className="form-control">
                <p>Create your account for Free</p>
                <label>
                  Name
                  <input
                    name="name"
                    type="text"
                    maxLength={20}
                    required
                    onChange={changeHandler}
                  />
                </label>
              </div>

              <div className="form-control">
                <label>
                  Email
                  <input
                    name="email"
                    type="email"
                    required
                    onChange={changeHandler}
                  />
                </label>
              </div>

              <div className="form-control">
                <label>
                  Phone Number
                  <input
                    name="phonenumber"
                    type="tel"
                    pattern="[0-9]{10}"
                    required
                    onChange={changeHandler}
                  />
                </label>
              </div>

              <div className="form-control">
                <label>
                  Password
                  <input
                    name="password"
                    type="password"
                    required
                    onChange={changeHandler}
                  />
                </label>
              </div>
              <div className="form-control">
                <button>Sign Up</button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
