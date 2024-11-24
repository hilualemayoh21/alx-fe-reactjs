const Login = () => {
  const handleLogin = () => {
    localStorage.setItem("authToken", "exampleToken");
    alert("Logged In!");
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    alert("Logged Out!");
  };

  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Login;
