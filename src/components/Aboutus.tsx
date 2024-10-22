"use client"

import { useState, useEffect } from 'react'

export default function Aboutus() {
  const [counts, setCounts] = useState([0, 0, 0])
  const targetCounts = [120, 120, 120]
  const duration = 2000 // Animation duration in milliseconds

  useEffect(() => {
    const startTime = Date.now()

    const animateCounts = () => {
      const elapsedTime = Date.now() - startTime
      const progress = Math.min(elapsedTime / duration, 1)

      const newCounts = targetCounts.map(target => 
        Math.round(progress * target)
      )

      setCounts(newCounts)

      if (progress < 1) {
        requestAnimationFrame(animateCounts)
      }
    }

    requestAnimationFrame(animateCounts)
  }, [])

  return (
    <div className="bg-black text-white p-8 md:p-16 lg:p-24">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">WHO ARE WE?</h1>
      <p className="text-gray-400 mb-12 max-w-4xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commLorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commLorncididunt ut labore et dolore magna aliqua. Ut enim
        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commLorncididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commLor
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {['Total Projects', 'Total Clients', 'Client Reviews'].map((title, index) => (
          <div key={title} className="text-center">
            <h2 className="text-gray-400 mb-2">{title}</h2>
            <p className="text-5xl md:text-6xl lg:text-7xl font-bold text-yellow-500">
              {counts[index]} <span className="text-yellow-500">+</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}