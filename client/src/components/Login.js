import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      await axios.post(
        "http://localhost:8000/api/login",
        { email, password },
        { withCredentials: true }
      );
      navigate("/chat");
    } catch (error) {
      setError("Invalid credentials. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute opacity-5 top-0 left-0 w-full h-full">
          {/* Abstract code patterns */}
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="grid"
                width="50"
                height="50"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 50 0 L 0 0 0 50"
                  fill="none"
                  stroke="white"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Floating algorithm symbols */}
        {[...Array(10)].map((_, index) => (
          <motion.div
            key={index}
            className="absolute text-teal-500 opacity-20 text-sm"
            initial={{
              x: Math.random() * 100,
              y: Math.random() * 100,
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              rotate: Math.random() * 360,
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 15 + Math.random() * 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            {
              [
                "O(n)",
                "O(log n)",
                "O(n²)",
                "{}",
                "[]",
                "→",
                "∑",
                "⊃",
                "∪",
                "∩",
              ][Math.floor(Math.random() * 10)]
            }
          </motion.div>
        ))}
      </div>

      {/* Logo - Top Left */}
      <motion.div
        className="absolute top-4 left-4 flex items-center z-10"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.img
          src="/page-photos/robot-2.png"
          alt="Logo"
          className="h-10 w-10 mr-2"
          animate={{
            rotate: [0, 10, 0, -10, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
          }}
        />
        <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500">
          DSA-GPT
        </span>
      </motion.div>

      {/* Login/Signup Buttons - Top Right */}
      <motion.div
        className="absolute top-4 right-4 flex space-x-4 z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Link
          to="/login"
          className="px-4 py-2 bg-gray-800 text-teal-400 border border-teal-500 rounded-lg hover:bg-gray-700 transition-colors"
        >
          Login
        </Link>
        <Link
          to="/signup"
          className="px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors shadow-md"
        >
          Sign Up
        </Link>
      </motion.div>

      {/* Main Content */}
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center p-8 gap-12 relative z-10">
        {/* Left Side - Bot Image with Animation */}
        <motion.div
          className="lg:w-1/2 flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          <motion.div
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            className="relative"
          >
            <motion.div
              className="absolute -inset-8 bg-teal-500 rounded-full opacity-20 blur-xl"
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
            <img
              src="/page-photos/robot-2.png"
              alt="DSA Chat Bot"
              className="max-w-full h-auto drop-shadow-2xl"
            />

            {/* Code snippet floating near the bot */}
            <motion.div
              className="absolute -left-20 top-20 bg-gray-800 p-4 rounded-lg shadow-lg text-sm font-mono text-teal-300 opacity-90 border border-gray-700 hidden lg:block"
              animate={{
                x: [0, 10, 0],
                rotate: [0, 1, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <div className="text-gray-400">/ / Welcome back!</div>
              <div>function login(user) {"{"}</div>
              <div className="pl-4">if (user.authenticated) {"{"}</div>
              <div className="pl-8">return "Access granted";</div>
              <div className="pl-4">{"}"}</div>
              <div>{"}"}</div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right Side - Login Form */}
        <motion.div
          className="lg:w-1/2 max-w-md w-full"
          initial="hidden"
          animate="visible"
          variants={fadeInUpVariants}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <motion.div
            className="bg-gray-800 bg-opacity-50 p-8 rounded-xl shadow-2xl border border-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <motion.h1
              className="text-3xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              Welcome Back
            </motion.h1>
            <motion.p
              className="text-gray-300 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              Log in to continue your algorithmic journey
            </motion.p>

            <form onSubmit={handleLogin}>
              <motion.div
                className="mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                <label htmlFor="email" className="block mb-2 text-teal-300">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                      />
                    </svg>
                  </div>
                  <input
                    type="email"
                    id="email"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-3 pl-10 bg-gray-700 bg-opacity-50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                    required
                  />
                </div>
              </motion.div>

              <motion.div
                className="mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                <label htmlFor="password" className="block mb-2 text-teal-300">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </div>
                  <input
                    type="password"
                    id="password"
                    placeholder="••••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-3 pl-10 bg-gray-700 bg-opacity-50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                    required
                  />
                </div>
              </motion.div>

              {error && (
                <motion.div
                  className="mb-4 text-red-400 text-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  {error}
                </motion.div>
              )}

              <motion.div
                className="flex items-center justify-between mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.1 }}
              >
                <div className="flex items-center">
                  <input
                    id="remember"
                    type="checkbox"
                    className="h-4 w-4 bg-gray-700 border-gray-600 rounded"
                  />
                  <label
                    htmlFor="remember"
                    className="ml-2 text-gray-300 text-sm"
                  >
                    Remember me
                  </label>
                </div>
                <a
                  href="#"
                  className="text-sm text-teal-400 hover:text-teal-300"
                >
                  Forgot password?
                </a>
              </motion.div>

              <motion.button
                type="submit"
                className="w-full px-4 py-3 bg-gradient-to-r from-teal-500 to-teal-400 text-white rounded-lg hover:from-teal-600 hover:to-teal-500 transition-all duration-300 font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                disabled={isLoading}
              >
                {isLoading ? (
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                ) : null}
                {isLoading ? "Logging in..." : "Log In"}
              </motion.button>

              <motion.div
                className="text-center mt-6 text-gray-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.3 }}
              >
                <span>Don't have an account? </span>
                <Link
                  to="/signup"
                  className="text-teal-400 hover:underline font-medium"
                >
                  Create one
                </Link>
                <span> now</span>
              </motion.div>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
