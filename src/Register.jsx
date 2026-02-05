import { useState } from "react";
import { User, Mail, Lock, Eye, EyeOff, Github } from "lucide-react";
import "./App.css";

export default function Register() {
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="login-wrapper">
      <div className="login-container">

        <div className="logo">
          <User size={22} />
        </div>

        <h2>Create Account</h2>
        <p className="subtitle">Start tracking your expenses today</p>

        <div className="login-card">
          <form>

            <label>Full Name</label>
            <div className="input-box">
              <User size={16} />
              <input type="text" placeholder="John Doe" />
            </div>

            <label>Email Address</label>
            <div className="input-box">
              <Mail size={16} />
              <input type="email" placeholder="john@example.com" />
            </div>

            <label>Password</label>
            <div className="input-box">
              <Lock size={16} />
              <input
                type={showPass ? "text" : "password"}
                placeholder="Create a strong password"
              />
              <span className="eye" onClick={() => setShowPass(!showPass)}>
                {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
              </span>
            </div>

            <label>Confirm Password</label>
            <div className="input-box">
              <Lock size={16} />
              <input
                type={showConfirm ? "text" : "password"}
                placeholder="Re-enter your password"
              />
              <span className="eye" onClick={() => setShowConfirm(!showConfirm)}>
                {showConfirm ? <EyeOff size={16} /> : <Eye size={16} />}
              </span>
            </div>

            <label className="remember">
              <input type="checkbox" />
              I agree to the <span>Terms of Service</span> & <span>Privacy Policy</span>
            </label>

            <button className="signin-btn green">Create Account</button>
          </form>

          <div className="divider">
            <span>Or sign up with</span>
          </div>

          <div className="social">
            <button>
              <img src="https://www.svgrepo.com/show/355037/google.svg" />
              Google
            </button>
            <button>
              <Github size={16} />
              GitHub
            </button>
          </div>
        </div>

        <p className="footer">
          Already have an account? <a href="/">Log in</a>
        </p>
      </div>
    </div>
  );
}
