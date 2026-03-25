import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";


const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");





  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetch("http://ahmed514essamapi.runasp.net/api/Account/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error("Login failed");
      }

      localStorage.setItem("token", data.token);

      navigate("/Dashboard");
    } 
    catch (err: unknown) {
  if (err instanceof Error) {
    alert(err.message);
  } else {
    alert("Login Failed");
  }
}
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleLogin}>
        <h2>Login</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;