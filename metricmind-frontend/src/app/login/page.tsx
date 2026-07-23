"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {Mail,Lock,Eye,EyeOff,} from "lucide-react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const handleLogin = () => {
    setError("");
    setSuccess("");
    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }
    if (!email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess("Login successful! Redirecting...");
    }, 1500);
  };
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-600 via-indigo-600 to-slate-900 flex items-center justify-center px-4">
      <div className="grid lg:grid-cols-2 bg-white/10 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl w-full max-w-6xl">
        {/* Left Side */}
        <div className="hidden lg:flex flex-col justify-center p-12 text-white">
          <h1 className="text-5xl font-bold">MetricMind AI</h1>
          <p className="mt-6 text-lg text-blue-100">
            AI Powered Business Intelligence Platform
          </p>
          <ul className="mt-10 space-y-4 text-lg">
            <li>✅ Interactive Dashboard</li>
            <li>✅ AI Chat Assistant</li>
            <li>✅ Forecast Analytics</li>
            <li>✅ PDF & CSV Export</li>
          </ul>
        </div>
        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white dark:bg-slate-900 p-10"
        >
          <h2 className="text-3xl font-bold text-center">
            Welcome Back
          </h2>
          <p className="text-center text-gray-500 mt-2">
            Sign in to continue
          </p>
          <form
            className="mt-8 space-y-5"
            onSubmit={(e) => e.preventDefault()}
          >
            {/* Email */}
            <div className="relative">
              <Mail
                size={20}
                className="absolute left-4 top-3.5 text-gray-400"
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {/* Password */}
            <div className="relative">
              <Lock
                size={20}
                className="absolute left-4 top-3.5 text-gray-400"
              />
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full pl-12 pr-12 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-3.5 text-gray-500"
              >
                {showPassword ? (
                  <EyeOff size={20} />
                ) : (
                  <Eye size={20} />
                )}
              </button>
            </div>
            {/* Remember Me */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                />
                Remember Me
              </label>
              <button
                type="button"
                className="text-blue-600 hover:underline"
              >
                Forgot Password?
              </button>
            </div>
            {/* Error */}
            {error && (
              <div className="bg-red-100 border border-red-300 text-red-700 rounded-lg p-3 text-sm">
                {error}
              </div>
            )}
            {/* Success */}
            {success && (
              <div className="bg-green-100 border border-green-300 text-green-700 rounded-lg p-3 text-sm">
                {success}
              </div>
            )}
            {/* Sign In */}
            <button
              type="button"
              onClick={handleLogin}
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-3 font-semibold transition disabled:opacity-70"
            >
              {loading ? "Signing In..." : "Sign In"}
            </button>
            {/* OR Divider */}
            <div className="flex items-center my-6">
              <div className="flex-1 border-t border-gray-300"></div>
              <span className="mx-4 text-gray-500 text-sm">
                OR
              </span>
              <div className="flex-1 border-t border-gray-300"></div>
            </div>
            {/* Google */}
            <button
              type="button"
              className="w-full border rounded-xl py-3 flex items-center justify-center gap-3 hover:bg-gray-100 transition"
            >
              <span className="text-xl">🌐</span>
              Continue with Google
            </button>
            {/* GitHub */}
            <button
              type="button"
              className="w-full mt-4 border rounded-xl py-3 flex items-center justify-center gap-3 hover:bg-gray-100 transition"
            >
              
              <span className="text-xl">🐙</span>
              Continue with GitHub
            </button>
          </form>
          {/* Sign Up */}
          <p className="text-center text-sm text-gray-500 mt-6">
            Donot have an account?{" "}
            <a
              href="#"
              className="text-blue-600 font-semibold hover:underline"
            >
              Sign Up
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  );
}