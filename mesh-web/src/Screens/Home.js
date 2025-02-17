import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={{ textAlign: "center", marginTop: 50 }}>
      <h1>Trang Chủ</h1>
      <Link to="/login-phone">
        <button>Đăng nhập</button>
      </Link>
    </div>
  );
};

export default Home;
