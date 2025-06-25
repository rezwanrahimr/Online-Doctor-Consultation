'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from "next/link"

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      id: 1,
      badge: "🩺 Trusted Healthcare",
      title: "Expert Medical Care",
      highlight: "At Your Fingertips",
      subtitle: "Connect with certified doctors instantly through our secure telemedicine platform. Get professional medical consultations, prescription refills, and health monitoring from the comfort of your home.",
      primaryBtn: { text: "Find a Doctor", link: "/doctor", icon: "→" },
      secondaryBtn: { text: "Book Appointment", link: "/appointment", icon: "📅" },
      bgImage: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      stats: [
        { number: "10,000+", label: "Happy Patients" },
        { number: "200+", label: "Certified Doctors" },
        { number: "24/7", label: "Medical Support" }
      ]
    },
    {
      id: 2,
      badge: "💊 Specialized Treatment",
      title: "Comprehensive",
      highlight: "Medical Services",
      subtitle: "From family medicine to specialized care in cardiology, dermatology, and mental health. Our board-certified physicians provide personalized treatment plans tailored to your specific needs.",
      primaryBtn: { text: "View Specialists", link: "/doctor", icon: "→" },
      secondaryBtn: { text: "Emergency Care", link: "/emergency", icon: "🚨" },
      bgImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      stats: [
        { number: "12+", label: "Medical Specialties" },
        { number: "95%", label: "Patient Satisfaction" },
        { number: "15 Min", label: "Average Wait Time" }
      ]
    },
    {
      id: 3,
      badge: "🏥 Digital Health",
      title: "Modern Healthcare",
      highlight: "Technology", 
      subtitle: "Experience the future of medicine with our AI-assisted diagnostic tools, electronic health records, and seamless integration with local pharmacies and laboratories.",
      primaryBtn: { text: "Explore Features", link: "/services", icon: "→" },
      secondaryBtn: { text: "Learn More", link: "/about", icon: "→" },
      bgImage: "https://images.unsplash.com/photo-1504813184591-01572f98c85f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      stats: [
        { number: "99.8%", label: "Platform Uptime" },
        { number: "30 Sec", label: "Connection Time" },
        { number: "50+ Cities", label: "Service Coverage" }
      ]
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [slides.length])

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slides[currentSlide].bgImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 via-slate-900/70 to-slate-900/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-slate-900/30" />
        </motion.div>
      </AnimatePresence>

      {/* Professional Grid Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc=')] opacity-20"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 min-h-screen">
        <div className="flex flex-col xl:flex-row items-center justify-between min-h-screen py-8 sm:py-12 lg:py-16 gap-8 lg:gap-12">
          
          {/* Content Section */}
          <div className="w-full xl:w-1/2 text-center xl:text-left order-2 xl:order-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.8 }}
                className="space-y-4 sm:space-y-6 lg:space-y-8"
              >
                {/* Professional Badge */}
                <motion.div 
                  className="inline-flex items-center py-2 sm:py-3 px-4 sm:px-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white font-medium text-xs sm:text-sm lg:text-base shadow-xl"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
                >
                  <span className="text-sm sm:text-lg mr-2">{slides[currentSlide].badge.split(' ')[0]}</span>
                  {slides[currentSlide].badge.split(' ').slice(1).join(' ')}
                </motion.div>

                {/* Hero Title */}
                <div className="space-y-1 sm:space-y-2">
                  <motion.h1 
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-white leading-tight"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    {slides[currentSlide].title}
                  </motion.h1>
                  <motion.h1 
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent leading-tight"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    {slides[currentSlide].highlight}
                  </motion.h1>
                </div>

                {/* Subtitle */}
                <motion.p 
                  className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-200 leading-relaxed max-w-2xl mx-auto xl:mx-0"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  {slides[currentSlide].subtitle}
                </motion.p>

                {/* CTA Buttons */}
                <motion.div 
                  className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center xl:justify-start pt-2 sm:pt-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  <Link href={slides[currentSlide].primaryBtn.link}>
                    <motion.button
                      whileHover={{ 
                        scale: 1.05,
                        boxShadow: "0 25px 50px rgba(16, 185, 129, 0.4)"
                      }}
                      whileTap={{ scale: 0.98 }}
                      className="group inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-semibold text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 transition-all duration-300 ease-in-out shadow-2xl w-full sm:min-w-[200px] lg:min-w-[220px]"
                    >
                      <span className="mr-2 sm:mr-3">{slides[currentSlide].primaryBtn.text}</span>
                      <span className="text-lg sm:text-xl group-hover:translate-x-1 transition-transform duration-200">
                        {slides[currentSlide].primaryBtn.icon}
                      </span>
                    </motion.button>
                  </Link>

                  <Link href={slides[currentSlide].secondaryBtn.link}>
                    <motion.button
                      whileHover={{ 
                        scale: 1.05,
                        backgroundColor: "rgba(255, 255, 255, 0.15)"
                      }}
                      whileTap={{ scale: 0.98 }}
                      className="group inline-flex items-center justify-center rounded-xl border-2 border-white/30 bg-white/10 backdrop-blur-md hover:bg-white/15 text-white font-semibold text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 transition-all duration-300 ease-in-out w-full sm:min-w-[200px] lg:min-w-[220px] shadow-xl"
                    >
                      <span className="mr-2 sm:mr-3">{slides[currentSlide].secondaryBtn.text}</span>
                      <span className="text-lg sm:text-xl group-hover:translate-x-1 transition-transform duration-200">
                        {slides[currentSlide].secondaryBtn.icon}
                      </span>
                    </motion.button>
                  </Link>
                </motion.div>

                {/* Trust Indicators */}
                <motion.div 
                  className="flex flex-wrap items-center justify-center xl:justify-start gap-4 sm:gap-6 pt-4 sm:pt-6 text-xs sm:text-sm text-gray-300"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1 }}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-green-400">🔒</span>
                    <span>HIPAA Compliant</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-blue-400">🏆</span>
                    <span>Board Certified</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-teal-400">⚡</span>
                    <span>Instant Access</span>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Professional Stats Panel */}
          <div className="w-full xl:w-1/2 flex justify-center xl:justify-end order-1 xl:order-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.8 }}
                className="w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-md"
              >
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border border-white/20 shadow-2xl">
                  <div className="text-center mb-4 sm:mb-6 lg:mb-8">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-1 sm:mb-2">Live Statistics</h3>
                    <p className="text-gray-300 text-xs sm:text-sm">Real-time platform metrics</p>
                  </div>

                  <div className="grid grid-cols-1 gap-3 sm:gap-4 lg:gap-6">
                    {slides[currentSlide].stats.map((stat, index) => (
                      <motion.div 
                        key={index}
                        className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 border border-white/10"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
                      >
                        <div className="text-center">
                          <div className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-1 sm:mb-2">
                            {stat.number}
                          </div>
                          <div className="text-xs sm:text-sm text-gray-300 font-medium">
                            {stat.label}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Live Indicator */}
                  <div className="flex items-center justify-center mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-white/10">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-xs text-gray-300">Live Updates</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Professional Navigation */}
        <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-4 sm:space-x-6">
          {/* Navigation Dots */}
          <div className="flex space-x-2 sm:space-x-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index 
                    ? 'bg-white scale-125 shadow-lg' 
                    : 'bg-white/40 hover:bg-white/60'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero;