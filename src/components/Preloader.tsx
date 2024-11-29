"use client"

import React, { useState, useEffect } from 'react'
import { motion, Variants } from 'framer-motion'
import Image from 'next/image'

export default function SmoothTypewriterPreloader() {
  const word = "TECHMONKEYS"
  const [isTypingDone, setIsTypingDone] = useState(false)
  const [isShrinking, setIsShrinking] = useState(false)

  useEffect(() => {
    const typingTimeout = setTimeout(() => {
      setIsTypingDone(true)
      setIsShrinking(true)
    }, word.length * 100 + 500)
    return () => clearTimeout(typingTimeout)
  }, [])

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
        duration: 1,
        ease: [0.7, 0, 0.3, 1],
      }
    }
  }

  const logoVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8, x: -20 },
    visible: { 
      opacity: 1, 
      scale: 1,
      x: 0,
      transition: {
        delay: 0.2,
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  return (
    <>
      <motion.div 
        className="fixed inset-0 bg-yellow-400 flex items-center justify-center z-50"
        animate={!isShrinking ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-center space-x-4 flex-row-reverse">
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
                className="inline-block text-black text-2xl"
                style={{ color: '#000000' }}
              >
                {letter}
              </motion.span>
            ))}
          </motion.div>
          <motion.div
            variants={logoVariants}
            initial="hidden"
            animate="visible"
          >
            <Image
              src="/techmonkey_logo_black.png"
              alt="TechMonkey Logo"
              width={60}
              height={60}
              className="object-contain mr-2 mt-3"
            />
          </motion.div>
        </div>
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

