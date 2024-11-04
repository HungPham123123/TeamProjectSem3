import { useState } from "react";
import axios from "../utils/axios"; // Đường dẫn đến file Axios đã tạo
import { useRouter } from "next/router";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/login", {
        username,
        password,
      });
      localStorage.setItem("token", response.data.token); // Lưu token vào localStorage
      alert("Đăng nhập thành công");
      router.push("/dashboard"); // Chuyển hướng đến trang chính sau khi đăng nhập
    } catch (error) {
      console.error("Đăng nhập thất bại:", error.response?.data);
      alert("Đăng nhập thất bại");
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input
        type="text"
        placeholder="Tên người dùng"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Mật khẩu"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Đăng nhập</button>
    </form>
  );
}
