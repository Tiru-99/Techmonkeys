"use client";

import { useState} from "react";
import { motion } from "framer-motion";

export default function Aboutus() {
  const [counts, setCounts] = useState([0, 0, 0]);
  const targetCounts = [80, 35, 25];
  const duration = 2000; // Animation duration in milliseconds

  const startCounterAnimation = () => {
    const startTime = Date.now();

    const animateCounts = () => {
      const elapsedTime = Date.now() - startTime;
      const progress = Math.min(elapsedTime / duration, 1);

      const newCounts = targetCounts.map(target =>
        Math.round(progress * target)
      );

      setCounts(newCounts);

      if (progress < 1) {
        requestAnimationFrame(animateCounts);
      }
    };

    requestAnimationFrame(animateCounts);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // Initial state: hidden and moved down
      whileInView={{ opacity: 1, y: 0 }} // Animate when in view
      onViewportEnter={startCounterAnimation} // Trigger counter animation on scroll
      transition={{ duration: 0.5 }} // Smooth fade-in and slide-up animation
      className="bg-black text-white p-8 md:p-16 lg:p-24"
      id="about-us"
    >
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" >WHO ARE WE?</h1>
      <p className="text-gray-400 mb-12 max-w-4xl">
        Tech Monkey is a dynamic tech company founded by <span className="font-bold text-white">Varun</span>, an Oxford MBA with extensive expertise in entrepreneurship, and <span className="font-bold text-white">Jainam</span>, a visionary entrepreneur who co-built and sold their IT startup to Amazon alongside Varun. Together, they bring over eight years of combined experience in IT, sales, and CRM, creating a foundation of innovation and excellence. Headquartered in Dubai, with offices in the United Kingdom and the United States, Tech Monkey specializes in developing customized technology solutions tailored to the needs of modern businesses. Our mission is to empower organizations to thrive in a digital-first world by streamlining processes, enhancing customer experiences, and driving sustainable growth. At Tech Monkey, <span className="text-white font-bold">Varun and Jainam’s</span> unique blend of technical expertise and strategic insight fuels our commitment to delivering cutting-edge solutions. Together, they lead a team dedicated to shaping the future of IT with creativity, precision, and impact.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {["Total Projects", "Total Clients", "Client Reviews"].map((title, index) => (
          <div key={title} className="text-center">
            <h2 className="text-gray-200 font-bold text-2xl mb-2">{title}</h2>
            <p className="text-5xl md:text-6xl lg:text-7xl font-bold text-yellow-500">
              {counts[index]} <span className="text-yellow-500">+</span>
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
