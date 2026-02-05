import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff, Github } from "lucide-react";
import "./App.css";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="login-wrapper">
      <div className="login-container">

        <div className="logo">
          <Lock size={22} />
        </div>

        <h2>Welcome Back</h2>
        <p className="subtitle">Log in to your ExpenseTracker account</p>

        <div className="login-card">
          <form>
            <label>Email Address</label>
            <div className="input-box">
              <Mail size={16} />
              <input type="email" placeholder="john@example.com" />
            </div>

            <label>Password</label>
            <div className="input-box">
              <Lock size={16} />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
              />
              <span
                className="eye"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </span>
            </div>

            <div className="options">
              <label className="remember">
                <input type="checkbox" />
                Remember me
              </label>
              <a href="#">Forgot password?</a>
            </div>

            <button
              className="signin-btn"
              onClick={(e) => {
                e.preventDefault();
                navigate("/dashboard");
              }}
            >
              Sign In
            </button>
          </form>

          <div className="divider">
            <span>Or continue with</span>
          </div>

          <div className="social">
            <button>
              <img
                src="https://www.svgrepo.com/show/355037/google.svg"
                alt="google"
              />
              Google
            </button>
            <button>
              <Github size={16} />
              GitHub
            </button>
          </div>
        </div>

        <p className="footer">
          Don’t have an account? <a href="/register">Register</a>
        </p>
      </div>
    </div>
  );
}
