'use client'

import BannerImg from "../images/home-banner-tow.png"
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from "next/link"

const Hero = () => {

  return (
    <div className="bg-[url('../images/banner_bg.jpg')] bg-cover bg-center bg-no-repeat relative">
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-10 lg:bg-opacity-0"></div>
      
      <div className="relative z-10">
        <motion.div
          className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="flex flex-col-reverse lg:flex-row-reverse items-center justify-between min-h-screen py-8 sm:py-12 lg:py-16 xl:py-20 gap-8 lg:gap-12 xl:gap-16">
            
            {/* Image Section */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="w-full lg:w-1/2 xl:w-5/12 flex justify-center lg:justify-end"
            >
              <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
                <Image 
                  src={BannerImg} 
                  className="w-full h-auto object-contain" 
                  alt="Banner Image showcasing online doctor consultation" 
                  priority 
                  sizes="(max-width: 640px) 300px, (max-width: 768px) 400px, (max-width: 1024px) 500px, 600px"
                />
              </div>
            </motion.div>

            {/* Text Section */}
            <motion.div
              className="w-full lg:w-1/2 xl:w-7/12 text-center lg:text-left"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              {/* Welcome Badge */}
              <motion.p 
                className="inline-block py-2 px-4 mb-4 text-sm sm:text-base lg:text-lg font-dm-sans font-bold text-color-secondary leading-tight bg-white bg-opacity-90 rounded-full shadow-sm"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                | Welcome to Online Doctor
              </motion.p>

              {/* Main Heading */}
              <motion.h1 
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold font-work-sans text-color-black leading-tight mb-4 lg:mb-6"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.4 }}
              >
                Complete Health Solution Online Doctor
              </motion.h1>

              {/* Description */}
              <motion.p 
                className="text-sm sm:text-base lg:text-lg xl:text-xl font-dm-sans leading-relaxed text-gray-700 mb-6 lg:mb-8 max-w-2xl mx-auto lg:mx-0"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.6 }}
              >
                We are dedicated to providing the best care for your well-being. At Online Doctor, we ensure you receive the attention and support you deserve on your journey to better health.
              </motion.p>

              {/* CTA Button */}
              <motion.div 
                className="flex justify-center lg:justify-start"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.8 }}
              >
                <Link href="/doctor">
                  <motion.button
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center justify-center rounded-full bg-color-primary hover:bg-opacity-90 text-color-white font-semibold text-sm sm:text-base lg:text-lg px-6 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-5 transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50"
                  >
                    <span className="mr-2">Meet A Doctor</span>
                    <svg 
                      className="w-4 h-4 sm:w-5 sm:h-5" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M9 5l7 7-7 7" 
                      />
                    </svg>
                  </motion.button>
                </Link>
              </motion.div>

              {/* Additional Stats or Features (Optional) */}
              <motion.div 
                className="hidden sm:flex flex-wrap justify-center lg:justify-start gap-4 lg:gap-6 mt-8 lg:mt-12"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 2 }}
              >
                <div className="text-center lg:text-left">
                  <div className="text-xl lg:text-2xl font-bold text-color-primary">24/7</div>
                  <div className="text-xs lg:text-sm text-gray-600">Available</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-xl lg:text-2xl font-bold text-color-primary">1000+</div>
                  <div className="text-xs lg:text-sm text-gray-600">Happy Patients</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-xl lg:text-2xl font-bold text-color-primary">50+</div>
                  <div className="text-xs lg:text-sm text-gray-600">Expert Doctors</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero;