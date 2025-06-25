'use client'

import AboutImg1 from "../images/about-img1.jpg"
import AboutImg2 from "../images/about_img2.jpg"
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from "next/link"

const AboutUs = () => {
    const features = [
        {
            icon: "🏥",
            title: "24/7 Medical Support",
            description: "Round-the-clock availability for all your healthcare needs"
        },
        {
            icon: "⚡",
            title: "Immediate Emergency Care",
            description: "Quick response and professional emergency services"
        },
        {
            icon: "📞",
            title: "Direct Contact Access",
            description: "Instant communication with our medical professionals"
        }
    ]

    const stats = [
        { number: "10K+", label: "Patients Served" },
        { number: "50+", label: "Expert Doctors" },
        { number: "15+", label: "Years Experience" },
        { number: "99%", label: "Success Rate" }
    ]

    return (
        <section className="relative py-16 sm:py-20 lg:py-24 xl:py-28 bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDEwIDAgTCAwIDAgMCAxMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMTY0ZTYzIiBzdHJva2Utd2lkdGg9IjEiLz48cGF0aCBkPSJNIDYwIDAgTCAwIDAgMCA2MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMTY0ZTYzIiBzdHJva2Utd2lkdGg9IjAuNSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>
            </div>

            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
                <motion.div
                    className="flex flex-col xl:flex-row items-center justify-between gap-12 lg:gap-16 xl:gap-20"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    {/* Image Section */}
                    <motion.div
                        className="relative w-full xl:w-1/2 order-2 xl:order-1"
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.3 }}
                    >
                        <div className="relative flex justify-center xl:justify-start max-w-lg mx-auto xl:mx-0">
                            {/* Decorative Background Shape */}
                            <div className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-br from-emerald-200 to-teal-200 rounded-full opacity-60 blur-2xl"></div>
                            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-full opacity-60 blur-2xl"></div>
                            
                            {/* Main Image Container */}
                            <div className="relative z-10">
                                <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-white p-3">
                                    <Image
                                        src={AboutImg1}
                                        className="w-full max-w-sm lg:max-w-md xl:max-w-sm 2xl:max-w-md rounded-2xl object-cover"
                                        alt="Medical professionals providing healthcare services"
                                        sizes="(max-width: 640px) 300px, (max-width: 1024px) 400px, 450px"
                                    />
                                    {/* Professional Badge */}
                                    <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                                        <div className="flex items-center gap-2">
                                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                            <span className="text-xs font-semibold text-slate-700">Expert Care</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Overlay Image */}
                            <div className="absolute top-12 -right-4 sm:-right-8 z-20">
                                <div className="relative overflow-hidden rounded-2xl shadow-xl bg-white p-2">
                                    <Image
                                        src={AboutImg2}
                                        className="w-28 sm:w-36 md:w-40 lg:w-32 xl:w-36 2xl:w-40 rounded-xl object-cover"
                                        alt="Hospital facility and medical equipment"
                                        sizes="(max-width: 640px) 120px, (max-width: 1024px) 150px, 160px"
                                    />
                                </div>
                                {/* Floating Stats Card */}
                                <div className="absolute -bottom-4 -left-4 bg-white/95 backdrop-blur-sm rounded-xl p-3 shadow-lg border border-slate-200">
                                    <div className="text-center">
                                        <div className="text-lg font-bold text-emerald-600">24/7</div>
                                        <div className="text-xs text-slate-600">Available</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Content Section */}
                    <motion.div
                        className="w-full xl:w-1/2 text-center xl:text-left order-1 xl:order-2"
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                        {/* Section Badge */}
                        <motion.div 
                            className="inline-flex items-center py-2 px-4 mb-6 text-sm font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-full shadow-sm"
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.7 }}
                        >
                            <span className="text-emerald-500 mr-2">●</span>
                            About Our Excellence
                        </motion.div>

                        {/* Main Heading */}
                        <motion.h2 
                            className="text-3xl sm:text-4xl lg:text-5xl xl:text-4xl 2xl:text-5xl font-bold text-slate-900 leading-tight mb-6"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.9 }}
                        >
                            Transforming Healthcare with 
                            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent"> Excellence</span>
                        </motion.h2>

                        {/* Description */}
                        <motion.p 
                            className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed mb-8 max-w-2xl mx-auto xl:mx-0"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 1.1 }}
                        >
                            We deliver exceptional healthcare services through cutting-edge technology, experienced professionals, and a patient-centered approach that prioritizes your well-being above all else.
                        </motion.p>

                        {/* Features Grid */}
                        <motion.div 
                            className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 2xl:grid-cols-2 gap-4 mb-8"
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 1.3 }}
                        >
                            {features.map((feature, index) => (
                                <motion.div 
                                    key={feature.title}
                                    className="flex items-start gap-4 p-4 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300"
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.6, delay: 1.5 + (index * 0.1) }}
                                    whileHover={{ scale: 1.02, y: -2 }}
                                >
                                    <div className="flex-shrink-0">
                                        <div className="w-12 h-12 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-xl flex items-center justify-center text-xl">
                                            {feature.icon}
                                        </div>
                                    </div>
                                    <div className="text-left">
                                        <h4 className="font-semibold text-slate-900 mb-1">{feature.title}</h4>
                                        <p className="text-sm text-slate-600">{feature.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                       

                        {/* CTA Buttons */}
                        <motion.div 
                            className="flex flex-col sm:flex-row gap-4 justify-center xl:justify-start"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 2.2 }}
                        >
                            <Link href="/about">
                                <motion.button
                                    className="group inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-semibold text-base px-8 py-4 transition-all duration-300 ease-in-out shadow-xl hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-emerald-300 focus:ring-opacity-50 min-w-[180px]"
                                    whileHover={{ 
                                        scale: 1.05,
                                        boxShadow: "0 20px 40px rgba(16, 185, 129, 0.3)"
                                    }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <span className="mr-3">Discover More</span>
                                    <svg 
                                        className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" 
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

                            <Link href="/contact">
                                <motion.button
                                    className="group inline-flex items-center justify-center rounded-xl border-2 border-slate-300 bg-white hover:bg-slate-50 text-slate-700 font-semibold text-base px-8 py-4 transition-all duration-300 ease-in-out shadow-sm hover:shadow-md focus:outline-none focus:ring-4 focus:ring-slate-200 focus:ring-opacity-50 min-w-[180px]"
                                    whileHover={{ 
                                        scale: 1.05,
                                        borderColor: "#10b981"
                                    }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <span className="mr-3">Contact Us</span>
                                    <svg 
                                        className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" 
                                        fill="none" 
                                        stroke="currentColor" 
                                        viewBox="0 0 24 24"
                                    >
                                        <path 
                                            strokeLinecap="round" 
                                            strokeLinejoin="round" 
                                            strokeWidth={2} 
                                            d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
                                        />
                                    </svg>
                                </motion.button>
                            </Link>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

export default AboutUs;