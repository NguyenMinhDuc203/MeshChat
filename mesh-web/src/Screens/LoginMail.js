import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";
import "../assets/Auth.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../firebase";
import Modal_ForgotPass from "./Modal_ForgotPass"; // Import modal

const LoginMail = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Vui lòng nhập email và mật khẩu.");
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      const userDocRef = doc(db, "users", user.uid);
      const userDoc = await getDoc(userDocRef);

      if (userDoc.exists()) {
        console.log("Đăng nhập thành công");
        // Điều hướng đến trang Profile
        alert("Đăng nhập thành công!");
      } else {
        console.error("Không tìm thấy dữ liệu người dùng!");
      }
    } catch (error) {
      console.error(error.message);
      alert("Đăng nhập thất bại: " + error.message);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: 50 }}>
      <img src={logo} alt="Logo" style={{ width: 300 }} />
      <h2>Đăng nhập tài khoản</h2>

      <div className="input-wrapper">
        <input
          type="email"
          placeholder="Nhập email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="no-border"
        />
      </div>

      <div className="input-wrapper">
        <input
          type="password"
          placeholder="Nhập mật khẩu"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="no-border"
        />
      </div>

      <button onClick={handleLogin}>Đăng nhập</button>

      <p>
        <Link to="/register" className="auth-link">Đăng ký ngay</Link>
      </p>

      <p>
        <a href="#" onClick={() => setModalVisible(true)}>Quên mật khẩu?</a>
      </p>

      <Link to="/">
        <button>Quay về Trang chủ</button>
      </Link>

      {/* Nhúng Modal */}
      <Modal_ForgotPass open={modalVisible} handleClose={() => setModalVisible(false)} />
    </div>
  );
};

export default LoginMail;
