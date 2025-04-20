import React, { useState, useEffect } from "react";
import DemoChat from "./DemoChat";
import { Link } from "react-router-dom";

export default function Description() {
  const [menChat, setMenChat] = useState(["How can I help you today?"]);
  const [womenChat, setWomenChat] = useState([]);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setWomenChat((prev) => {
        return [...prev, `I need some healthcare advice.`];
      });
    }, 2000);

    const timer2 = setTimeout(() => {
      setMenChat((prev) => {
        return [...prev, `Sure, I'm here to help.`];
      });
    }, 4000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div className="h-[85%] grid grid-cols-2 gap-4 max-[1400px]:grid-cols-[4fr,5fr] max-[1300px]:grid-cols-[3fr,5fr] max-[1127px]:grid-rows-2 max-[1127px]:grid-cols-[1fr] max-[451px]:grid-rows-1">
      <div className="flex flex-col justify-center items-start">
        <div className="text-gray-800 text-5xl font-semibold max-[1300px]:text-3xl max-[1127px]:text-5xl max-[607px]:text-4xl">
          Welcome to AI-Driven Healthcare Support
        </div>
        <p className="mt-10 text-gray-600 text-lg font-semibold">
          Your assistant for healthcare support and triage.
        </p>
        <div className="mt-8">
          <Link
            to="/login"
            className="px-4 py-2 bg-blue-500 text-white rounded mr-2"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="px-4 py-2 bg-green-500 text-white rounded"
          >
            Sign Up
          </Link>
        </div>
      </div>
      <div className="relative max-[451px]:hidden">
        <div className="absolute w-[50%] top-[20%] translate-y-[-20%] left-[95%] z-[555] translate-x-[-95%] max-[1127px]:top-[-15%]">
          {menChat.map((val, ind) => {
            return <DemoChat isMale={true} key={ind} message={val} />;
          })}
        </div>
        <div className="absolute w-[50%] top-[68%] translate-y-[-68%] left-[15%] z-[87] translate-x-[-15%] max-[1127px]:top-[78%]">
          {womenChat.map((val, ind) => {
            return <DemoChat isMale={false} key={ind} message={val} />;
          })}
        </div>
        <img
          alt="bot pic"
          className="w-[55%] rounded-[20px] absolute top-[30%] z-50 translate-y-[-30%] max-[1127px]:top-[0%]"
          src="/images/bot.jpg"
        />
        <img
          alt="men pic"
          className="w-[55%] rounded-[20px] absolute top-[84%] translate-y-[-84%] z-30 left-[95%] max-[1127px]:top-[100%] translate-x-[-95%]"
          src="/images/men.jpg"
        />
        <img
          alt="dots pic"
          className="w-[30%] absolute top-[84%] translate-y-[-84%] left-[25%] translate-x-[-25%]"
          src="/images/design.png"
        />
        <img
          alt="ball"
          className="absolute top-[10%] translate-y-[-10%] left-[25%] translate-x-[-25%]"
          src="/images/white-ball.png"
        />
        <img
          alt="ball"
          className="absolute top-[84%] translate-y-[-84%] left-[5%] translate-x-[-5%]"
          src="/images/orange-ball.png"
        />
        <img
          alt="orange-ball"
          className="absolute top-[15%] translate-y-[-15%] left-[95%] translate-x-[-95%]"
          src="/images/orange-ball.png"
        />
      </div>
    </div>
  );
}
