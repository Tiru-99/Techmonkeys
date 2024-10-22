"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const projects = [
  {
    id: 1,
    title: "Seaside Resort",
    description: "Luxurious beachfront accommodations with stunning ocean views.",
    image: "/hotelmanagement.jpg"
  },
  {
    id: 2,
    title: "Mountain Lodge",
    description: "Cozy retreat nestled in the heart of majestic peaks.",
    image: "/hotelmanagement.jpg"
  },
  {
    id: 3,
    title: "Urban Skyline Hotel",
    description: "Modern luxury with panoramic city vistas.",
    image: "/hotelmanagement.jpg"
  },
  {
    id: 4,
    title: "Tropical Island Bungalows",
    description: "Private paradise escapes surrounded by crystal-clear waters.",
    image: "/hotelmanagement.jpg"
  },
  {
    id: 5,
    title: "Historic Castle Hotel",
    description: "Step back in time with regal accommodations in a restored castle.",
    image: "/hotelmanagement.jpg"
  }
]

export default function PerspectiveCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (isAutoPlaying) {
      const timer = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % projects.length)
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
    const isAdjacent = absoluteDiff === 1 || absoluteDiff === projects.length - 1

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
      transition: 'transform 0.6s ease, opacity 0.6s ease',  // Added smooth transition
    }
  }

  return (
    <div className="relative w-full h-screen bg-gray-100 overflow-hidden flex flex-col items-center justify-center pt-12">
      <h2 className="text-4xl font-bold mb-12 text-gray-800">Our Luxury Properties</h2>
      <div
        className="relative w-full max-w-4xl h-[400px] mt-12"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <AnimatePresence initial={false}>
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="absolute top-0 left-0 right-0 w-full max-w-lg mx-auto cursor-pointer p-3"
              style={getCardStyles(index)}
              animate={{ transition: { duration: 0.5 } }}
              onClick={() => setActiveIndex(index)}
            >
              <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 text-sm">{project.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <div className="mt-8 flex space-x-2">
        {projects.map((_, index) => (
          <motion.div
            key={index}
            className="w-3 h-3 rounded-full bg-gray-300 cursor-pointer"
            animate={{
              scale: activeIndex === index ? 1.5 : 1,
              backgroundColor: activeIndex === index ? "#4F46E5" : "#D1D5DB"
            }}
            transition={{ duration: 0.3 }}  // Added transition for button click
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  )
}
