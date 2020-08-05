import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import authApi from "../../apis/auth";

const Login = (props) => {
  const history = useHistory();

  const [user, setUser] = useState({ username: "", password: "" });
  function handleChange(event) {
    setUser({
      ...user,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  }
  async function handleSubmit(event) {
    event.preventDefault();
    try {
      // Colocando uma string em branco como URL, pois os dados que queremos inserir via POST sao sempre o segundo parametro do metodo "post" do Axios
      const result = await authApi.post("/login", user);

      setUser({ ...result.data });

      localStorage.setItem("loggedInUser", JSON.stringify({ ...result.data }));
      // Redirecionar de volta para lista de Projetos
      history.push("/");
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div>
      <h1>Login</h1>
      <hr></hr>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            placeholder="Username"
            type="text"
            className="form-control form-control-lg"
            id="authUsernameField"
            name="username"
            onChange={handleChange}
            value={user.username}
          />
        </div>
        <div className="form-group">
          <input
            placeholder="Password"
            type="password"
            className="form-control form-control-lg"
            name="password"
            id="authPasswordField"
            onChange={handleChange}
            value={user.password}
          />
        </div>
        <button type="submit" className="btn btn-lg btn-primary">
          Login
        </button>
        <p></p>
      </form>
    </div>
  );
};

export default Login;
