import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
axios.defaults.withCredentials = true;

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState("");
  const { username, password } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/login", formData)
      .then((res) => {
        console.log(res);
        if (res.data.user.role === "admin") {
          localStorage.setItem("username", res.data.user.username);
          localStorage.setItem("id", res.data.user._id);
          localStorage.setItem("role", res.data.user.role);

          navigate("/admin");
        } else if (res.data.user.role === "normal") {
          localStorage.setItem("username", res.data.user.username);
          localStorage.setItem("id", res.data.user._id);
          localStorage.setItem("role", res.data.user.role);

          navigate("/poll-app");
        }
      })
      .catch((err) => {
        console.log(err);
        setError(err.response.data);
      });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "30px",
        justifyContent: "right",
        marginTop: "100px",
       
          
      }}
    >
      <div>
        <img
          src="https://geekbot.com/blog/wp-content/uploads/2022/06/15-Best-Free-Polling-Tools-For-Getting-Actionable-Data-From-Customers-and-Teams-At-No-Cost-1.png"
          width="300px"
          height="200px"
          style={{ borderRadius: "10px" }}
        />
      </div>
      <div>
        <section
          className="navbar-brand mb-0 h1"
          style={{
            fontSize: "20px",
            fontFamily: "Arial, sans-serif",
            color: "blue",
            display: "flex",
            gap: "10px",
            marginLeft: "7px",
          }}
        >
          <img
            src="data:image/jpeg;base64,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"
            width="20"
            height="20"
            alt=""
          />
          <h3 style={{ fontSize: "20px" }}>EasyPolls</h3>
        </section>
        <h3
          style={{
            fontFamily: "Arial, sans-serif",
            fontSize: "20px",
            marginLeft: "-652px",
          }}
        >
          Sign in to continue to polls
        </h3>
        <form
          onSubmit={handleSubmit}
          className="row g-3 needs-validation"
          noValidate
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "auto",
            width: "900px",
          }}
        >
          <div class="col-md-4">
            <label
              htmlFor="validationCustom01"
              className="form-label"
              style={{ float: "left" }}
            >
              Username
            </label>
            <input
              name="username"
              htmlFor="username"
              className="form-control"
              id="validationCustom01"
              value={username}
              onChange={handleChange}
              required
              style={{ border: error ? "1px solid red" : null, boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
              backgroundColor: "white",
              borderRadius:"10px"
               }}
            />
            <p style={{ color: "red", textAlign: "left" }}></p>
          </div>
          <div class="col-md-4">
            <label
              htmlFor="validationCustom01"
              className="form-label"
              style={{ float: "left" }}
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              htmlFor="password"
              className="form-control"
              id="validationCustom01"
              value={password}
              onChange={handleChange}
              style={{ border: error ? "1px solid red" : null, boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
              backgroundColor: "white",
              borderRadius:"10px" }}
            />
            <p style={{ color: "red", textAlign: "left" }}>
              {error && error.messageBlank ? error.messageBlank : null}
            </p>
          </div>

          <div class="col-12">
            <button
              className="btn btn-primary"
              type="submit"
              style={{ float: "left" }}
            >
              Sign in
            </button>
            <p style={{ marginRight: "560px", marginTop: "10px" }}>
              <Link to="/signup">No account? Create one</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
