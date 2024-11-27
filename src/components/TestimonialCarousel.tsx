"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: "Osman",
    role: "CEO, Auto Breeze Car Rental",
    content: "Partnering with Tech Monkey was one of the best decisions for our car rental firm. Their expertise in building our website and mobile app has transformed the way we manage our database and serve our customers. With their seamless solutions and intuitive designs, our operations have become more efficient, and our customers love the user-friendly experience.As a firm started by the former VP of Deutsche Bank, we sought nothing but excellence, and Tech Monkey delivered beyond expectations. Their professionalism, technical expertise, and commitment to innovation are truly commendable. Highly recommended!",
    rating: 5,
    image: "/placeholder.svg?height=80&width=80"
  },
  {
    id: 2,
    name: "Achyt , Kathmandu Nepal ",
    role: "Owner, The Laughing Sherpa",
    content: "Tech Monkey has been instrumental in bringing The Laughing Sherpa's vision to life. Our mission to empower farmers in Nepal by bringing their products to the global market required a robust and impactful e-commerce platform, and Tech Monkey delivered just that.The website they built for us is not only visually stunning but also incredibly functional, enabling seamless transactions and showcasing our story of sustainability and community impact. Their dedication to understanding our values and translating them into a digital experience is truly remarkable.Thanks to Tech Monkey, we’re making a difference while connecting with customers worldwide!",
    rating: 5,
    image: "/placeholder.svg?height=80&width=80"
  },
  {
    id: 3,
    name: "Maria, Barcelona, Spain",
    role: "Manager, Urban Skyline Hotel",
    content: "Tech Monkey delivered an exceptional website that brings our AI brand’s mission to life. As a leading AI company in Spain, focused on highlighting the differences between content generated by ChatGPT and Gemini, we needed a platform that was both visually striking and highly functional.Tech Monkey’s team exceeded our expectations by creating a seamless, user-friendly website that effectively communicates our expertise and innovation. Their professionalism, creativity, and dedication to our vision have helped us establish a strong digital presence. We couldn’t have asked for a better partner!",
    rating: 4,
    image: "/placeholder.svg?height=80&width=80"
  },
  {
    id: 4,
    name: "Vivi, Dubai, United Arab Emirates ",
    role: "Owner, Tutor",
    content: "Tech Monkey has been a game-changer for Tutor. As a platform connecting freelancers with clients, we needed a robust and intuitive website that caters to both sides seamlessly. Tech Monkey delivered exactly that, creating an admin model for freelancers and a user-friendly base website for clients, ensuring a flawless experience for all.Their team brought unparalleled expertise, creativity, and technical precision to the table. Thanks to Tech Monkey, Tutor now has a digital platform that perfectly reflects our mission and drives meaningful connections. We couldn’t be happier with the results!",
    rating: 5,
    image: "/placeholder.svg?height=80&width=80"
  },
  
]

export default function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (isAutoPlaying) {
      const timer = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
      }, 7000)
      return () => clearInterval(timer)
    }
  }, [isAutoPlaying])

  const handleMouseEnter = () => setIsAutoPlaying(false)
  const handleMouseLeave = () => setIsAutoPlaying(true)

  const getCardStyles = (index: number) => {
    const diff = index - activeIndex
    const absoluteDiff = Math.abs(diff)
    const isActive = diff === 0
    const isAdjacent = absoluteDiff === 1 || absoluteDiff === testimonials.length - 1

    let translateX = 0
    let translateY = 0
    let rotateY = 0
    let scale = 1
    let zIndex = 1
    let opacity = 1

    if (isActive) {
      translateY = -20
      scale = 1.1
      zIndex = 10
    } else if (isAdjacent) {
      translateX = diff < 0 ? -110 : 110
      rotateY = diff < 0 ? 45 : -45
      scale = 0.9
      zIndex = 5
      opacity = 0.7
    } else {
      translateX = diff < 0 ? -220 : 220
      rotateY = diff < 0 ? 60 : -60
      scale = 0.8
      zIndex = 1
      opacity = 0.5
    }

    return {
      zIndex,
      transform: `perspective(1000px) translateX(${translateX}%) translateY(${translateY}px) rotateY(${rotateY}deg) scale(${scale})`,
      opacity,
      transition: 'transform 0.6s ease, opacity 0.6s ease',
    }
  }

  return (
    <div className="relative w-full min-h-screen bg-gray-50 overflow-hidden flex flex-col items-center justify-center pt-12 px-4">
      <h2 className="text-4xl font-bold mb-12 text-indigo-800">Client Testimonials</h2>
      <div
        className="relative w-full max-w-4xl h-[450px] mt-12"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <AnimatePresence initial={false}>
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="absolute top-0 left-0 right-0 w-full max-w-lg mx-auto cursor-pointer"
              style={getCardStyles(index)}
              animate={{ transition: { duration: 0.5 } }}
              onClick={() => setActiveIndex(index)}
            >
              <div className="bg-white rounded-lg shadow-xl overflow-hidden p-6 border border-indigo-100">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-black">{testimonial.name}</h3>
                    <p className="text-black">{testimonial.role}</p>
                  </div>
                </div>
                <div className="mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`inline-block w-5 h-5 ${
                        i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'
                      }`}
                      fill="currentColor"
                    />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-indigo-300 mb-2" />
                <p className="text-gray-600 italic">{testimonial.content}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <div className="md:mt-24 mt-48 mb-12 flex space-x-2">
        {testimonials.map((_, index) => (
          <motion.div
            key={index}
            className="w-3 h-3 rounded-full bg-indigo-200 cursor-pointer"
            animate={{
              scale: activeIndex === index ? 1.5 : 1,
              backgroundColor: activeIndex === index ? "#4F46E5" : "#C7D2FE"
            }}
            transition={{ duration: 0.3 }}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  )
}