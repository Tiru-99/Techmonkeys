"use client";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { motion } from "framer-motion"; 
import { useState, useEffect } from "react";
import Aboutus from "@/components/Aboutus";
import ClientTestimonials from "@/components/ClientTestimonial";
import PortfolioCarousel from "@/components/PortfolioCarousel";
import Footer from "@/components/Footer";
import { Services } from "@/components/Services";
import SmoothTypewriterPreloader from "@/components/Preloader";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate content loading or a data fetch
    const loadContent = setTimeout(() => {
      setIsLoading(false); // Set loading to false once content is ready
    }, 3000); // Set a duration as needed

    return () => clearTimeout(loadContent); // Clean up the timeout on unmount
  }, []);

  if (isLoading) {
    return <SmoothTypewriterPreloader />;
  }

  const letterVariants = {
    hidden: { opacity: 0, y: -40 }, // Start off invisible and slightly above
    visible: { opacity: 1, y: 0 }, // Fade in and slide to original position
  };

  return (
    <>
      <Navbar />
      <div className="bg-black">
        <div className="text-gray-400 text-3xl pt-12 text-center md:text-justify mx-auto md:text-7xl md:pt-32 md:ml-44 font-semibold tracking-widest">
          NO TECH CHALLENGE IS TOO <br />
          {/* Animate each letter of "BANANAS" */}
          <motion.span
            className="inline-block text-yellow-400 hover:text-white transition-colors duration-300"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1, // Stagger each letter by 0.1 seconds
                },
              },
            }}
          >
            {"BANANAS".split("").map((letter, index) => (
              <motion.span
                key={index}
                className="inline-block"
                variants={letterVariants}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                {letter}
              </motion.span>
            ))}
          </motion.span>{" "}
          FOR US
        </div>

        {/* Image with animation */}
        <motion.div
          className="w-[85%] mt-24 h-[60vh] relative mx-auto bg-black"
          initial={{ opacity: 0, y: 50, scale: 1.1, rotate: -5 }}
          animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          <Image
            src="/comptyping.jpg"
            alt="computer typing image"
            layout="fill"
            className="object-cover"
          />
        </motion.div>
      </div>

      <div className="flex flex-wrap justify-around gap-8 p-4 bg-white">
        <div className="w-32 h-32 overflow-hidden filter grayscale transition duration-300 hover:grayscale-0">
          <Image
            src="/aws.png"
            alt="AWS"
            width={128}
            height={128}
            className="object-contain w-full h-full"
          />
        </div>

        <div className="w-32 h-32 overflow-hidden filter grayscale transition duration-300 hover:grayscale-0">
          <Image
            src="/google cloud.png"
            alt="Google Cloud"
            width={200}
            height={200}
            className="object-contain w-full h-full scale-120 mb-32"
          />
        </div>

        <div className="w-32 h-32 overflow-hidden filter grayscale transition duration-300 hover:grayscale-0">
          <Image
            src="/adobe.png"
            alt="Adobe"
            width={200}
            height={200}
            className="object-contain w-full h-full"
          />
        </div>

        <div className="w-32 h-32 overflow-hidden filter grayscale transition duration-300 hover:grayscale-0">
          <Image
            src="/SAP.png"
            alt="SAP"
            width={200}
            height={200}
            className="object-contain w-full h-full"
          />
        </div>

        <div className="w-32 h-32 overflow-hidden filter grayscale transition duration-300 hover:grayscale-0">
          <Image
            src="/salesforce.png"
            alt="Salesforce"
            width={200}
            height={200}
            className="object-contain w-full h-full"
          />
        </div>
      </div>

      <Services />

      <Aboutus />

      <ClientTestimonials />

      <PortfolioCarousel />

      <Footer />
    </>
  );
}
