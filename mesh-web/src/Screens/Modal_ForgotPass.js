import React, { useState } from 'react';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../firebase';

const Modal_ForgotPass = ({ open, handleClose }) => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handlePasswordReset = async () => {
    if (!email) {
      alert('Vui lòng nhập email.');
      return;
    }
    
    setLoading(true);
    try {
      await sendPasswordResetEmail(auth, email);
      alert('Email đặt lại mật khẩu đã được gửi.');
      setEmail('');
      handleClose();
    } catch (error) {
      console.error(error.message);
      alert('Không thể gửi email đặt lại mật khẩu.');
    }
    setLoading(false);
  };

  if (!open) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <h2>Quên Mật Khẩu</h2>
        <input
          type="email"
          placeholder="Nhập email của bạn"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />
        <button onClick={handlePasswordReset} style={styles.button} disabled={loading}>
          {loading ? 'Đang gửi...' : 'Xác nhận'}
        </button>
        <button onClick={handleClose} style={styles.closeButton}>Đóng</button>
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '5px',
    textAlign: 'center',
    width: '300px',
  },
  input: {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  button: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginTop: '10px',
  },
  closeButton: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#ccc',
    color: '#000',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginTop: '5px',
  },
};

export default Modal_ForgotPass;