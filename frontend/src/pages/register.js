import { useState } from "react";
import axios from "axios";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/register", {
        username,
        password,
        email,
      });
      console.log(response.data);
      alert("Đăng ký thành công");
    } catch (error) {
      console.error("Đăng ký thất bại:", error.response.data);
      alert("Đăng ký thất bại");
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <input
        type="text"
        placeholder="Tên người dùng"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Mật khẩu"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Đăng ký</button>
    </form>
  );
}
