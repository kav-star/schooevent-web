
import "../components/styles/auth.css";

export default function Login() {
  return (
    <div className="auth">
      <h2>LOGIN</h2>
      <input placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button>Login</button>
    </div>
  );
}
