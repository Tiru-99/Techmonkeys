"use client";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { motion } from "framer-motion"; 
import { useState, useEffect , useRef} from "react";
import Aboutus from "@/components/Aboutus";
import Footer from "@/components/Footer";
import SmoothTypewriterPreloader from "@/components/Preloader";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import OurServices from "@/components/OurServices";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const[isHovered , setIsHovered] = useState(false);
  const circleRef = useRef<HTMLDivElement | null>(null);


  const handleMouseMove=(e: React.MouseEvent<HTMLDivElement>) =>{
    if(circleRef.current){
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left; // Mouse X relative to the image
      const y = e.clientY - rect.top;  // Mouse Y relative to the image

      const circleSize = circleRef.current.offsetWidth / 2;
      circleRef.current.style.transform = `translate(${x - circleSize}px, ${y - circleSize}px)`;
    }
  }

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
    hidden: { opacity: 0, y: -40 }, 
    visible: { opacity: 1, y: 0 }, 
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
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Image
            src="/comptyping.jpg"
            alt="computer typing image"
            layout="fill"
            className="object-cover"
          />

          {/* Circle that follows the cursor */}

          {isHovered && (
            <div
              ref={circleRef}
              className="absolute text-white flex items-center justify-center w-32 h-32 border border-white bg-black/20 rounded-full pointer-events-none transition-transform duration-100 -translate-x-1/2 -translate-y-1/2"
            >
              Contact Us
            </div>
          )}

        </motion.div>
      </div>

      <div className="flex flex-wrap justify-around gap-8 p-4 bg-gray-100">
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


      <OurServices/>

      <Aboutus />

      <TestimonialCarousel/>

        <Footer />
    
      
    </>
  );
}
