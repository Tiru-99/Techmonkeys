"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

const testimonials = [
  {
    name: "Raquel Jordan",
    title: "Marketing Manager",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea comm",
    image: "/discussions.jpg",
    background: "/discussions.jpg",
  },
  {
    name: "John Doe",
    title: "Product Designer",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: "/okay.jpg",
    background: "/okay.jpg",
  },
  {
    name: "Jane Smith",
    title: "CEO",
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    image: "/testimonial.jpg",
    background: "/testimonial.jpg",
  },
]

export default function ClientTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="w-full bg-gray-100 md:pt-12 ">
      <div className="flex flex-col md:flex-row w-full h-[70vh]">
        <div className="w-full md:w-1/2 text-black p-8 md:p-16 relative">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 md:mb-24 md:-my-12">CLIENT TESTIMONIAL</h2>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              <div className="flex items-center space-x-4 ">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold">{testimonials[currentIndex].name}</h3>
                  <p className="text-sm text-gray-400">{testimonials[currentIndex].title}</p>
                </div>
              </div>
              <p className="text-gray-700">{testimonials[currentIndex].text}</p>
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="absolute bottom-8 right-8 flex space-x-2">
            <button
              onClick={prevTestimonial}
              className="p-2 bg-white rounded-full hover:bg-gray-700 hover:text-white transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-2 bg-white rounded-full hover:bg-gray-700 hover:text-white  transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 h-[60vh] md:h-auto relative overflow-hidden md:-my-12">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentIndex}
              src={testimonials[currentIndex].background}
              alt="Background"
              className="w-full h-full object-cover"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            />
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}