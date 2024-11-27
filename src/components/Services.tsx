"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function Services() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20 bg-black">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
      Our Services.
      </h2>
      <Carousel items={cards} />
    </div>
  );
}



const data = [
  {
    category: "Web Design and Development",
    title: "We create powerful, dynamic websites that are as visually appealing as they are functional. Whether you need a sleek corporate website, an engaging portfolio, or an interactive platform, our team ensures every detail aligns with your brand’s identity.",
    src: "/hotelmanagement.jpg",
    content: "Custom Designs: Unique layouts designed specifically for your business.Responsive Development: Seamless experiences across desktop, tablet, and mobile devices.Optimized Performance: Fast-loading websites that enhance user engagement and SEO rankings.Integrated Features: From chatbots to CRM tools, we include functionalities that elevate your website’s usability."
  },
  {
    category: "Mobile App Development",
    title: "Enhance your productivity.",
    src: "/hotelmanagement.jpg",
    content: "hello world 2",
  },
  {
    category: "Custom Software Development",
    title: "Launching the new Apple Vision Pro.",
    src: "/hotelmanagement.jpg",
    content:"hello world 3",
  },

  {
    category: "Tech Support Consulting",
    title: "Maps for your iPhone 15 Pro Max.",
    src: "/hotelmanagement.jpg",
    content: "hello world 4",
  },
  {
    category: "E-Commerce Solutions",
    title: "Photography just got better.",
    src: "/hotelmanagement.jpg",
    content: "hello world 5",
  }
]; 