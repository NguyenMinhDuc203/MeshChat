import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo-removebg.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "../firebase";
import { setDoc, doc } from "firebase/firestore";
import { FaEye, FaEyeSlash } from "react-icons/fa"; 
import "../assets/Auth.css"; // Import CSS chung

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleRegister = async (e) => {
    if (!name || !email || !password || !confirmPassword) {
      alert("Vui lòng điền đầy đủ thông tin.");
      return;
    }
    if (password !== confirmPassword) {
      alert("Mật khẩu và xác nhận mật khẩu không khớp.");
      return;
    }
    
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      console.log(user);
      if (user) {
        await setDoc(doc(db, "users", user.uid), { name, email });
        await updateProfile(user, { displayName: name });
      }
      alert("Đăng ký thành công");
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: 50 }}>
      <img src={logo} alt="Logo" style={{ width: 300}} />
      <h2>Đăng ký tài khoản</h2>
      <div className="input-wrapper">
        <input
          type="text"
          placeholder="Nhập tên của bạn"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className=" no-border"
        />
      </div>

      <div className="input-wrapper">
        <input
          type="email"
          placeholder="Nhập email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className=" no-border"
        />
      </div>

      <div className="input-wrapper">
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Nhập mật khẩu"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className=" no-border"
        />
        <span onClick={() => setShowPassword(!showPassword)} className="icon">
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </span>
      </div>

      <div className="input-wrapper">
        <input
          type={showConfirmPassword ? "text" : "password"}
          placeholder="Nhập lại mật khẩu"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className=" no-border"
        />
        <span onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="icon">
          {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
        </span>
      </div>

      <button onClick={handleRegister} >Đăng ký</button>

      <p>
        Đã có tài khoản? <Link to="/login" >Đăng nhập ngay</Link>
      </p>

      <Link to="/">
        <button >Quay về Trang chủ</button>
      </Link>
    </div>
  );
};

export default Register;
