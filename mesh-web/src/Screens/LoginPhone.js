import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";

const LoginPhone = () => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Đăng nhập với:", phone, password);
  };

  return (
    <div style={{ textAlign: "center", marginTop: 50 }}>
      <img src={logo} alt="Logo" style={{ width: 100, marginBottom: 20 }} />
      <h2>Đăng nhập bằng số điện thoại</h2>
      <input
        type="text"
        placeholder="Nhập số điện thoại"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        style={{ display: "block", margin: "10px auto", padding: 8, width: "80%" }}
      />
      <input
        type="password"
        placeholder="Nhập mật khẩu"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ display: "block", margin: "10px auto", padding: 8, width: "80%" }}
      />
      <button onClick={handleLogin} style={{ padding: 10, backgroundColor: "#007bff", color: "white", border: "none", cursor: "pointer" }}>
        Đăng nhập
      </button>
      <br /><br />
      
      {/* Link chuyển sang đăng nhập bằng email */}
      <p>Hoặc <Link to="/login-mail">đăng nhập bằng email</Link></p>
      <p>Chưa có tài khoản? <Link to="/register">Đăng ký ngay</Link></p>
      <Link to="/">
        <button style={{ padding: 10 }}>Quay về Trang chủ</button>
      </Link>
    </div>
  );
};

export default LoginPhone;
