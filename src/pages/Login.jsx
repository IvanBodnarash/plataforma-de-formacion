import { useNavigate } from "react-router";

export default function Login() {
  const navigate = useNavigate();
  function handleLogin() {
    navigate("/admin?auth=true");
  }
  return (
    <div className="text-light">
      <h1>Login para gestionar</h1>
      <button className="mt-2" onClick={handleLogin}>Login</button>
    </div>
  );
}
