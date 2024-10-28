"use client"
import React, { useState, useEffect } from 'react'
import { motion, Variants } from 'framer-motion'

export default function SmoothTypewriterPreloader() {
  const word = "TECHMONKEYS"
  const [isTypingDone, setIsTypingDone] = useState(false)
  const [isShrinking, setIsShrinking] = useState(false)

  useEffect(() => {
    const typingTimeout = setTimeout(() => {
      setIsTypingDone(true)
      // Immediately trigger shrinking when typing is done
      setIsShrinking(true)
    }, word.length * 100 + 500) // Reduced extra delay to 500ms
    return () => clearTimeout(typingTimeout)
  }, [])

  // Removed the second useEffect since we don't need the extra delay anymore

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.04 * i },
    }),
  }

  const childVariants: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      color: "#000000",
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
  }

  const overlayVariants: Variants = {
    initial: { 
      height: "100vh",
    },
    shrink: { 
      height: 0,
      transition: { 
        duration: 1, // Reduced duration for quicker animation
        ease: [0.7, 0, 0.3, 1],
      }
    }
  }

  return (
    <>
      <motion.div 
        className="fixed inset-0 bg-yellow-400 flex items-center justify-center z-50"
        animate={!isShrinking ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.3 }} // Faster fade out
      >
        <motion.div
          className="text-6xl font-bold text-black"
          variants={containerVariants}
          initial="hidden"
          animate={!isTypingDone ? "visible" : "hidden"}
          aria-live="polite"
          style={{ zIndex: 60 }}
        >
          {word.split("").map((letter, index) => (
            <motion.span 
              key={index} 
              variants={childVariants} 
              className="inline-block text-black text-2xl "
              style={{ color: '#000000' }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>

      <motion.div 
        className="fixed bottom-0 left-0 w-full bg-yellow-400 origin-bottom z-40"
        style={{
          borderTopLeftRadius: '50%',
          borderTopRightRadius: '50%',
        }}
        variants={overlayVariants}
        initial="initial"
        animate={isShrinking ? "shrink" : "initial"}
      />
    </>
  )
}