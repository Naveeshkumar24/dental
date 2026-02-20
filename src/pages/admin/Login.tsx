import { useState } from "react";
import { API_ENDPOINTS } from "@/config/api";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const login = async () => {
    try {
      const res = await fetch(API_ENDPOINTS.LOGIN, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) throw new Error("Invalid credentials");

      const data: { token: string } = await res.json();
      localStorage.setItem("token", data.token);
      window.location.href = "/admin/dashboard";
    } catch {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-80 space-y-4">
        <h1 className="text-xl font-semibold text-center">Admin Login</h1>

        <input
          className="border p-2 w-full"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="border p-2 w-full"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={login}
          className="w-full bg-black text-white py-2"
        >
          Login
        </button>

        {error && <p className="text-red-600 text-sm">{error}</p>}
      </div>
    </div>
  );
};

export default Login;
