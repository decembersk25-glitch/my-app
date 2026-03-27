import { useState } from "react";
import "./AdminLogin.css";

function RegisterPage({ onRegister }) {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    gender: "",
    dob: "",
    role: "",
    experience: ""
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Registered Successfully ✅");
    console.log(data);

    onRegister();
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="title">Register</h2>
        <form onSubmit={handleSubmit}>

          {/* Basic Info */}
          <div className="input-group">
            <label>Full Name</label>
            <input name="name" onChange={handleChange} required />
          </div>

          <div className="input-group">
            <label>Email</label>
            <input type="email" name="email" onChange={handleChange} required />
          </div>

          <div className="input-group">
            <label>Phone</label>
            <input name="phone" onChange={handleChange} required />
          </div>

          <div className="input-group">
            <label>Address</label>
            <input name="address" onChange={handleChange} required />
          </div>

          {/* Personal Info */}
          <div className="input-group">
            <label>Gender</label>
            <select name="gender" onChange={handleChange} required>
              <option value="">Select</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>

          <div className="input-group">
            <label>Date of Birth</label>
            <input type="date" name="dob" onChange={handleChange} required />
          </div>

          {/* Professional Info */}
          <div className="input-group">
            <label>Role / Position</label>
            <input name="role" placeholder="e.g. Manager, Developer" onChange={handleChange} required />
          </div>

          <div className="input-group">
            <label>Experience (Years)</label>
            <input type="number" name="experience" onChange={handleChange} required />
          </div>

          <button className="login-btn">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;