import React, { useState, useEffect, useRef } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import {
  FaMicrophone,
  FaPaperPlane,
  FaLightbulb,
  FaCode,
  FaBookmark,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { ReactTyped } from "react-typed";
import axios from "axios";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [user, setUser] = useState(null);
  const [isTyping, setIsTyping] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const chatContainerRef = useRef(null);

  const { transcript, resetTranscript } = useSpeechRecognition();

  const demoSuggestions = [
    "Explain binary search complexity",
    "How do I implement a bubble sort?",
    "What's the best way to solve this sorting problem?",
    "Help me understand merge sort",
  ];

  useEffect(() => {
    setInput(transcript);
  }, [transcript]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/me", {
          withCredentials: true,
        });
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching user data", error);
      }
    };
    fetchUser();
  }, []);

  const handleMicClick = () => {
    if (isListening) {
      SpeechRecognition.stopListening();
      setIsListening(false);
    } else {
      SpeechRecognition.startListening({ continuous: true });
      setIsListening(true);
    }
  };

  const sendMessage = async () => {
    if (input.trim()) {
      const newMessage = { text: input, sender: "user" };
      setMessages([...messages, newMessage]);
      setInput("");
      resetTranscript();
      setIsTyping(true);

      try {
        // Send the user message to the Flask server
        const response = await axios.post("http://127.0.0.1:5000/chat", {

            message: input,
          }
        );

        // Simulate a slight delay to show typing indicator
        setTimeout(() => {
          const botMessage = { text: response.data.response, sender: "bot" };
          setMessages((prevMessages) => [...prevMessages, botMessage]);
          setIsTyping(false);

          // Save the chat to the database
          axios
            .post("http://localhost:8000/api/chat", {
              userMessage: newMessage.text,
              botMessage: botMessage.text,
              userId: user?.id,
            })
            .catch((error) => {
              console.error("Error saving chat", error);
            });
        }, 1000);
      } catch (error) {
        console.error("Error sending message to the chatbot", error);
        setIsTyping(false);
      }
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return <div>Your browser does not support speech recognition.</div>;
  }

  const handleLogout = async () => {
    try {
      await axios.post(
        "http://localhost:8000/api/logout",
        {},
        { withCredentials: true }
      );
      window.location.href = "/";
    } catch (error) {
      console.error("Error logging out", error);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setInput(suggestion);
    setShowSuggestions(false);
    inputRef.current.focus();
  };

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="flex flex-col h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
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
        {[...Array(12)].map((_, index) => (
          <motion.div
            key={index}
            className="absolute text-teal-500 opacity-20 text-sm"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
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

      {/* Header */}
      <motion.header
        className="bg-gray-800 bg-opacity-80 backdrop-blur-sm p-4 flex justify-between items-center border-b border-gray-700 shadow-lg z-10"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div className="flex items-center" whileHover={{ scale: 1.05 }}>
          <motion.img
            src="page-photos/robot-2.png"
            alt="Bot"
            className="w-10 h-10 mr-2"
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
          <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500">
            DSA-GPT
          </h1>
        </motion.div>
        <div className="flex items-center">
          <motion.button
            className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-md mr-2 flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => (window.location.href = "/")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            Home
          </motion.button>
          <motion.button
            className="bg-gradient-to-r from-teal-500 to-teal-400 hover:from-teal-600 hover:to-teal-500 text-white px-4 py-2 rounded-md shadow-md flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleLogout}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3 3a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V4a1 1 0 00-1-1H3zm11 4a1 1 0 10-2 0v4.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L14 11.586V7z"
                clipRule="evenodd"
              />
            </svg>
            Logout
          </motion.button>
        </div>
      </motion.header>

      {/* Main Content */}
      <div
        ref={chatContainerRef}
        className="flex-1 flex flex-col items-center justify-center relative overflow-y-auto p-4 pb-24"
      >
        {messages.length === 0 ? (
          // Welcome screen - only shown when no messages
          <motion.div
            className="text-center mb-8 max-w-2xl"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h2
              className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500"
              variants={fadeInUp}
            >
              DSA GPT - Your Algorithm Coach
            </motion.h2>
            <motion.div
              className="my-8"
              variants={fadeInUp}
              whileHover={{ scale: 1.05, rotate: [0, -5, 5, -5, 0] }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative">
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
                  src="page-photos/robott.png"
                  alt="GPT Bot"
                  className="w-32 h-32 mx-auto relative z-10"
                />
              </div>
            </motion.div>

            <motion.p
              className="text-gray-300 text-xl mb-6"
              variants={fadeInUp}
            >
              I'm here to help you master Data Structures & Algorithms!
            </motion.p>

            <motion.div variants={fadeInUp}>
              <ReactTyped
                strings={[
                  "Ask me about binary search...",
                  "Need help with linked lists?",
                  "Want to understand Big O notation?",
                  "Struggling with dynamic programming?",
                  "Let's solve algorithm problems together!",
                ]}
                typeSpeed={40}
                backSpeed={30}
                loop
                className="text-teal-300 text-lg block mb-8"
              />
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-xl mx-auto"
              variants={fadeInUp}
            >
              {demoSuggestions.map((suggestion, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    scale: 1.03,
                    backgroundColor: "rgba(20, 184, 166, 0.2)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-gray-800 p-4 rounded-lg border border-gray-700 cursor-pointer hover:border-teal-500 transition-all duration-300"
                  onClick={() => handleSuggestionClick(suggestion)}
                >
                  <div className="flex items-center">
                    <FaLightbulb className="text-teal-400 mr-2" />
                    <span>{suggestion}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ) : (
          // Messages container - shown once messages exist
          <motion.div
            className="w-full max-w-4xl"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <AnimatePresence>
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  className={`my-4 flex ${
                    message.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {message.sender === "bot" && (
                    <motion.div
                      className="h-8 w-8 rounded-full bg-teal-500 flex items-center justify-center mr-2 mt-1"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1, rotate: [0, 10, 0] }}
                      transition={{ duration: 0.3 }}
                    >
                      <img
                        src="page-photos/robot-2.png"
                        alt="Bot"
                        className="h-6 w-6"
                      />
                    </motion.div>
                  )}
                  <motion.div
                    className={`p-4 max-w-lg rounded-2xl shadow-lg ${
                      message.sender === "user"
                        ? "bg-gradient-to-r from-teal-600 to-teal-500 text-white rounded-tr-none"
                        : "bg-gray-800 border border-gray-700 text-white rounded-tl-none"
                    }`}
                    whileHover={{ scale: 1.01 }}
                    style={{
                      wordWrap: "break-word",
                    }}
                  >
                    {message.text}
                  </motion.div>
                  {message.sender === "user" && (
                    <motion.div
                      className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center ml-2 mt-1"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>

            {/* Typing indicator */}
            <AnimatePresence>
              {isTyping && (
                <motion.div
                  className="flex justify-start my-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div className="h-8 w-8 rounded-full bg-teal-500 flex items-center justify-center mr-2 mt-1">
                    <img
                      src="page-photos/robot-2.png"
                      alt="Bot"
                      className="h-6 w-6"
                    />
                  </motion.div>
                  <motion.div className="p-4 rounded-2xl bg-gray-800 border border-gray-700 text-white rounded-tl-none">
                    <motion.div
                      className="flex space-x-1"
                      animate={{ y: [0, -5, 0] }}
                      transition={{
                        repeat: Infinity,
                        duration: 1.5,
                        times: [0, 0.5, 1],
                        staggerChildren: 0.2,
                      }}
                    >
                      <motion.div
                        className="w-2 h-2 bg-teal-400 rounded-full"
                        animate={{ y: [0, -5, 0] }}
                        transition={{
                          duration: 0.5,
                          repeat: Infinity,
                          delay: 0,
                        }}
                      />
                      <motion.div
                        className="w-2 h-2 bg-teal-400 rounded-full"
                        animate={{ y: [0, -5, 0] }}
                        transition={{
                          duration: 0.5,
                          repeat: Infinity,
                          delay: 0.2,
                        }}
                      />
                      <motion.div
                        className="w-2 h-2 bg-teal-400 rounded-full"
                        animate={{ y: [0, -5, 0] }}
                        transition={{
                          duration: 0.5,
                          repeat: Infinity,
                          delay: 0.4,
                        }}
                      />
                    </motion.div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
            <div ref={messagesEndRef} />
          </motion.div>
        )}
      </div>

      {/* Bottom action bar */}
      <motion.div
        className="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-gray-900 to-transparent pt-16"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <div className="flex justify-center">
          <div className="w-full max-w-4xl relative">
            {/* Suggestion toggle button */}
            <motion.button
              className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-800 text-teal-400 border border-teal-500 px-4 py-1 rounded-t-lg flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowSuggestions(!showSuggestions)}
            >
              <FaLightbulb className="mr-2" />
              {showSuggestions ? "Hide Suggestions" : "Show Suggestions"}
            </motion.button>

            {/* Suggestion panel */}
            <AnimatePresence>
              {showSuggestions && (
                <motion.div
                  className="absolute bottom-full left-0 right-0 bg-gray-800 border border-gray-700 rounded-t-lg p-3 mb-2 shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex flex-wrap gap-2">
                    {demoSuggestions.map((suggestion, index) => (
                      <motion.button
                        key={index}
                        className="bg-gray-700 hover:bg-gray-600 text-sm text-teal-300 py-1 px-3 rounded-full border border-gray-600 flex items-center"
                        whileHover={{
                          scale: 1.05,
                          backgroundColor: "rgba(45, 212, 191, 0.2)",
                        }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleSuggestionClick(suggestion)}
                      >
                        <FaLightbulb className="mr-1 text-xs" />
                        {suggestion}
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Input area */}
            <div className="relative">
              <motion.input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                className="w-full p-4 pr-24 bg-gray-800 border border-gray-700 rounded-full text-white focus:border-teal-500 focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50 transition-all duration-300"
                placeholder="Ask about DSA concepts, problems, or solutions..."
                whileFocus={{ scale: 1.01 }}
                layoutId="input-field"
              />
              <div className="absolute right-3 top-2 flex">
                {/* <motion.button
                  onClick={handleMicClick}
                  className={`p-2 rounded-full mr-1 ${
                    isListening ? "bg-red-500" : "bg-gray-700 hover:bg-gray-600"
                  }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                 <FaMicrophone />  
                </motion.button> */}
                <motion.button
                  onClick={sendMessage}
                  className="p-2 bg-gradient-to-r from-teal-500 to-teal-400 hover:from-teal-600 hover:to-teal-500 rounded-full shadow-lg"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaPaperPlane />
                </motion.button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer text */}
        <motion.div
          className="text-center text-gray-500 text-xs mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 1 }}
        >
          DSA-GPT • Your algorithmic thinking partner • Learn patterns, not just
          solutions
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Chat;
