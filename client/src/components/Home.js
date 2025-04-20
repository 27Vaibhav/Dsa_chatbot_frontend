import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";

const Home = () => {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const scrollRef = useRef(null);

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white p-8 overflow-hidden"
      ref={scrollRef}
    >
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
        {[...Array(15)].map((_, index) => (
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

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10">
        {/* Left Side - Text Content */}
        <motion.div
          className="flex flex-col justify-center"
          initial="hidden"
          animate="visible"
          variants={fadeInUpVariants}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
              MASTER DSA WITH
            </h1>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 flex items-center">
              <span className="mr-2">YOUR GUIDED</span>
              <ReactTyped
                strings={["MENTOR", "COACH", "ASSISTANT"]}
                typeSpeed={100}
                backSpeed={50}
                loop
                className="text-teal-400"
              />
            </h1>
          </motion.div>

          <motion.p
            className="text-gray-300 text-xl mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            Learn data structures and algorithms through guided problem-solving,
            not just memorizing solutions.
          </motion.p>

          <motion.div
            className="space-y-4 mb-8"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            <motion.div
              className="flex items-start"
              variants={fadeInUpVariants}
            >
              <div className="flex-shrink-0 mt-1">
                <div className="w-6 h-6 bg-gradient-to-r from-teal-500 to-teal-400 text-white flex items-center justify-center rounded-full shadow-lg">
                  ✓
                </div>
              </div>
              <p className="ml-3 text-gray-200">
                <span className="font-semibold text-teal-300">
                  Step-by-step guidance
                </span>{" "}
                - Not just solutions, but learning paths
              </p>
            </motion.div>

            <motion.div
              className="flex items-start"
              variants={fadeInUpVariants}
            >
              <div className="flex-shrink-0 mt-1">
                <div className="w-6 h-6 bg-gradient-to-r from-teal-500 to-teal-400 text-white flex items-center justify-center rounded-full shadow-lg">
                  ✓
                </div>
              </div>
              <p className="ml-3 text-gray-200">
                <span className="font-semibold text-teal-300">
                  Interactive problem-solving
                </span>{" "}
                - Hints and tips without spoiling solutions
              </p>
            </motion.div>

            <motion.div
              className="flex items-start"
              variants={fadeInUpVariants}
            >
              <div className="flex-shrink-0 mt-1">
                <div className="w-6 h-6 bg-gradient-to-r from-teal-500 to-teal-400 text-white flex items-center justify-center rounded-full shadow-lg">
                  ✓
                </div>
              </div>
              <p className="ml-3 text-gray-200">
                <span className="font-semibold text-teal-300">
                  Algorithmic thinking
                </span>{" "}
                - Learn patterns that apply across multiple problems
              </p>
            </motion.div>

            <motion.div
              className="flex items-start"
              variants={fadeInUpVariants}
            >
              <div className="flex-shrink-0 mt-1">
                <div className="w-6 h-6 bg-gradient-to-r from-teal-500 to-teal-400 text-white flex items-center justify-center rounded-full shadow-lg">
                  ✓
                </div>
              </div>
              <p className="ml-3 text-gray-200">
                <span className="font-semibold text-teal-300">
                  Time complexity analysis
                </span>{" "}
                - Understand the efficiency of your approaches
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="mt-2"
          >
            <Link
              to="/signup"
              className="px-8 py-3 bg-gradient-to-r from-teal-500 to-teal-400 text-white rounded-lg hover:from-teal-600 hover:to-teal-500 transition-all duration-300 font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-block"
            >
              Start Learning Now
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Side - Bot Image with Animation */}
        <motion.div
          className="flex justify-center items-center"
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
              className="absolute -inset-4 bg-teal-500 rounded-full opacity-20 blur-xl"
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
              src="/page-photos/homepage-bot.png"
              alt="DSA Chat Bot"
              className="max-w-full h-auto relative z-10 drop-shadow-2xl"
            />

            {/* Code snippet floating near the bot */}
            <motion.div
              className="absolute -right-20 top-20 bg-gray-800 p-4 rounded-lg shadow-lg text-sm font-mono text-teal-300 opacity-90 z-20 border border-gray-700 hidden md:block"
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
              <div className="text-gray-400">// Binary search hint</div>
              <div>function binarySearch(arr, target) {"{"}</div>
              <div className="pl-4">let left = 0;</div>
              <div className="pl-4">let right = arr.length - 1;</div>
              <div className="pl-4">// Need help with the next steps?</div>
              <div>{"}"}</div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Login/Signup Buttons */}
      <motion.div
        className="absolute top-4 right-4 flex space-x-4"
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

      {/* Logo - Top Left */}
      <motion.div
        className="absolute top-4 left-4 flex items-center"
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

      {/* Optional: Floating Action Button */}
      <motion.div
        className="fixed bottom-8 right-8 z-20"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.3, type: "spring" }}
      >
        <Link
          to="/chat"
          className="flex items-center justify-center w-14 h-14 bg-gradient-to-r from-teal-500 to-teal-400 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
            />
          </svg>
        </Link>
      </motion.div>
    </div>
  );
};

export default Home;
