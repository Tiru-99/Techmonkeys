'use client'

import { motion } from "framer-motion";
import { useState } from "react";
import { useIsMobile } from "@/hooks/useIsMobile";

interface Service {
  image: string;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    image: "/working.jpg",
    title: "Web Development and Design",
    description: "We create powerful, dynamic websites that are as visually appealing as they are functional. Whether you need a sleek corporate website, an engaging portfolio, or an interactive platform, our team ensures every detail aligns with your brand's identity.Custom Designs: Unique layouts designed specifically for your business.Responsive Development: Seamless experiences across desktop, tablet, and mobile devices.Optimized Performance: Fast-loading websites that enhance user engagement and SEO rankings.Integrated Features: From chatbots to CRM tools, we include functionalities that elevate your website's usability."
  },
  {
    image: "/mobiledev.jpg",
    title: "Mobile App Development",
    description: "Mobile-first is no longer optional—it's essential. We design and develop mobile applications that meet the demands of today's tech-savvy users.Cross-Platform Expertise: Apps for iOS, Android, or hybrid platforms.User-Centric Designs: Intuitive interfaces that prioritize the end-user experience.Advanced Features: Integration of AI, AR/VR, or payment gateways to meet your specific needs.End-to-End Support: From ideation to deployment and updates, we're with you at every step."
  },
  {
    image: "/ecom.jpg",
    title: "E-Commerce Solutions",
    description: "Online shopping continues to evolve, and we ensure your e-commerce platform stays ahead of the curve.Custom Storefronts: Tailored to your brand with engaging and attractive designs.Secure Payment Systems: Safe, encrypted payment gateways for user trust and convenience.Inventory Management: Automated systems for tracking stock and managing orders.Analytics Integration: Tools to track performance, understand customer behavior, and drive growth."
  },
  {
    image: "/realestate.jpg",
    title: " Real Estate Profiles",
    description: "The real estate market demands platforms that highlight properties effectively while offering ease of use.Interactive Listings: High-quality property descriptions, images, and videos.3D Virtual Tours: Immersive experiences that allow clients to explore properties remotely.Search & Filter Options: Advanced tools to help users find properties based on their preferences.Agent Integration: Features that connect agents with clients effortlessly.CRM Compatibility: Streamlined tools to manage leads, inquiries, and follow-ups."
  },
  {
    image: "/techsupport.jpg",
    title: "Tech Support Consulting",
    description: "Technology should empower, not hinder your business. Our tech support consulting services are designed to address challenges and ensure seamless operations.Infrastructure Optimization: Enhancing system performance and reliability.System Integration: Connecting software, hardware, and platforms for better workflow.Troubleshooting & Support: On-demand solutions for any technical issues.Strategic Guidance: Insights to future-proof your tech setup and make informed decisions.Ongoing Maintenance: Continuous updates, security checks, and performance enhancements."
  }
];

export default function OurServices(): JSX.Element {
  return (
    <div className="flex flex-col lg:flex-row items-start justify-center gap-20 px-6 overflow-hidden bg-white " id="services">
      <LeftSection />
      <RightSection />
    </div>
  );
}

function LeftSection(): JSX.Element {
  return (
    <div className="w-full lg:w-1/3 mb-6 lg:mb-0 pt-12">
      <h2 className="text-6xl mb-8 font-black tracking-tight">OUR SERVICES</h2>
      <p className="text-lg leading-relaxed text-gray-600 max-w-xl font-bahnschrift">
      At Tech Monkey, we specialize in delivering a range of innovative solutions that are tailored to meet the unique needs of your business. With a team of experienced professionals and a client-centric approach, we ensure that every solution is designed to not only address your current requirements but also scale with your future growth. Our core services span across key technological areas that empower your business to stay ahead of the competition and thrive in a digital-first world.
      </p>
    </div>
  );
}

function RightSection(): JSX.Element {
  const isMobile = useIsMobile();

  const dragConstraints = isMobile
  ? { left: -1220, right: 0 } // Mobile constraints
  : { left: -740, right: 0 }; // Desktop constraints


  return (
    <motion.div
      className="w-full lg:w-2/3 cursor-grab active:cursor-grabbing"
      drag="x"
      dragConstraints={dragConstraints}
      dragElastic={0.2}
      dragMomentum={false}
      onDragStart={(e) => e.preventDefault()}
    >
      <div className="flex gap-0">
        {services.map((service, idx) => (
          <ImageCard key={idx} service={service} index={idx} />
        ))}
      </div>
    </motion.div>
  );
}

interface ImageCardProps {
  service: Service;
  index: number;
}

function ImageCard({ service, index }: ImageCardProps): JSX.Element {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <div 
      className="relative flex-shrink-0 w-80 md:w-[350px] md:h-[600px] h-108 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={service.image}
        alt={`Working ${index + 1}`}
        className="object-cover w-full h-full"
        draggable={false}
      />
      <div className="absolute inset-0 bg-black opacity-40 pointer-events-none" />
      <motion.div 
        className="absolute inset-x-0 bottom-0 p-4 text-white"
        initial={{ y: 0 }}
        animate={{ y: isHovered ? -60 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.h3 
          className="text-xl font-bold mb-2"
          initial={{ opacity: 1 }}
          animate={{ opacity: isHovered ? 0.7 : 1 }}
          transition={{ duration: 0.3 }}
        >
          {service.title}
        </motion.h3>
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: isHovered ? 1 : 0, 
            height: isHovered ? 'auto' : 0 
          }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <p className="text-sm">{service.description}</p>
        </motion.div>
      </motion.div>
    </div>
  );
}

