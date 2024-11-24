import React, { useState } from "react";

function RegistrationForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleChange = function (e) {
    const { name, value } = e.target;
    // Update state based on the input's name attribute
    if (name === "username") setUsername(value);
    if (name === "email") setEmail(value);
    if (name === "password") setPassword(value);
  };

  const handleSubmit = function (e) {
    e.preventDefault();

    // Validation function
    const validateError = function () {
      let newErrors = {};
      if (!username) {
        newErrors.username = "Username is required";
      }
      if (!email) {
        newErrors.email = "Email is required";
      }
      if (!password) {
        newErrors.password = "Password is required";
      }
      return newErrors;
    };

    const validationErrors = validateError();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors); // Set errors if validation fails
    } else {
      setErrors({}); // Clear errors if validation passes
      console.log("The data was submitted successfully", {
        username,
        email,
        password,
      });
      alert("The form was submitted successfully");
      setUsername(""); // Reset username
      setEmail(""); // Reset email
      setPassword(""); // Reset password
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={username}
          onChange={handleChange}
          placeholder="Username"
        />
        <br />
        <br />
        {errors.username && (
          <div style={{ color: "red" }}>{errors.username}</div>
        )}

        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          placeholder="Email"
        />
        <br />
        <br />
        {errors.email && <div style={{ color: "red" }}>{errors.email}</div>}

        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          placeholder="Password"
        />
        <br />
        <br />
        {errors.password && (
          <div style={{ color: "red" }}>{errors.password}</div>
        )}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default RegistrationForm;
