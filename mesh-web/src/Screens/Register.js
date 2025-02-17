import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";

const Register = () => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [registerByEmail, setRegisterByEmail] = useState(true); // Mặc định đăng ký bằng email

  const handleRegister = () => {
    console.log("Đăng ký với:", name, contact, password);
  };

  return (
    <div style={{ textAlign: "center", marginTop: 50 }}>
      <img src={logo} alt="Logo" style={{ width: 100, marginBottom: 20 }} />
      <h2>Đăng ký tài khoản</h2>

      <input
        type="text"
        placeholder="Nhập tên của bạn"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ display: "block", margin: "10px auto", padding: 8, width: "80%" }}
      />

      {/* Chuyển đổi giữa Email & Số điện thoại */}
      <input
        type={registerByEmail ? "email" : "text"}
        placeholder={registerByEmail ? "Nhập email" : "Nhập số điện thoại"}
        value={contact}
        onChange={(e) => setContact(e.target.value)}
        style={{ display: "block", margin: "10px auto", padding: 8, width: "80%" }}
      />


<input
        type="password"
        placeholder="Nhập mật khẩu"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ display: "block", margin: "10px auto", padding: 8, width: "80%" }}
      />    

<input                                                  
        type="confirmPassword"
        placeholder="Nhập lại mật khẩu"
        value={password}
        onChange={(e) => setConfirmPassword(e.target.value)}
        style={{ display: "block", margin: "10px auto", padding: 8, width: "80%" }}
      />

      <button onClick={handleRegister} style={{ padding: 10, backgroundColor: "#007bff", color: "white", border: "none", cursor: "pointer" }}>
        Đăng ký
      </button>

      {/* Nút chuyển đổi giữa đăng ký bằng Email và Số điện thoại */}
      <p>
        <a href="#" onClick={() => setRegisterByEmail(!registerByEmail)}>
          {registerByEmail ? "Đăng ký bằng số điện thoại" : "Đăng ký bằng email"}
        </a>
      </p>

      <p>Đã có tài khoản? <Link to="/login-phone">Đăng nhập ngay</Link></p>

      <Link to="/">
        <button style={{ padding: 10 }}>Quay về Trang chủ</button>
      </Link>
    </div>
  );
};

export default Register;
