'use client'

import { motion } from 'framer-motion'
import Link from 'next/link';
import DoctorsCardCarousel from './DoctorsCardCarousel';

const Doctors = () => {
    return (
        <section className="relative py-16 sm:py-20 lg:py-24 xl:py-28 bg-gradient-to-br from-slate-50 via-white to-emerald-50 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDEwIDAgTCAwIDAgMCAxMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMTY0ZTYzIiBzdHJva2Utd2lkdGg9IjEiLz48cGF0aCBkPSJNIDYwIDAgTCAwIDAgMCA2MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMTY0ZTYzIiBzdHJva2Utd2lkdGg9IjAuNSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>
            </div>

            {/* Decorative Background Shapes */}
            <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-emerald-200 to-teal-200 rounded-full opacity-40 blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-full opacity-40 blur-3xl"></div>
            <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full opacity-30 blur-2xl"></div>

            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
                {/* Header Section */}
                <motion.div 
                    className="text-center max-w-4xl mx-auto mb-16"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Section Badge */}
                    <motion.div 
                        className="inline-flex items-center py-2 px-4 mb-6 text-sm font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-full shadow-sm"
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <span className="text-emerald-500 mr-2">●</span>
                        Our Medical Team
                    </motion.div>

                    {/* Main Heading */}
                    <motion.h1 
                        className="text-4xl sm:text-5xl lg:text-6xl xl:text-5xl 2xl:text-6xl font-bold text-slate-900 leading-tight mb-6"
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        Meet Our 
                        <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent"> Expert Doctors</span>
                    </motion.h1>

                    {/* Description */}
                    <motion.p 
                        className="text-lg sm:text-xl lg:text-2xl text-slate-600 leading-relaxed max-w-3xl mx-auto"
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        Our team of highly qualified medical professionals is dedicated to providing exceptional healthcare services with compassion, expertise, and cutting-edge medical technology.
                    </motion.p>
                </motion.div>

                {/* Doctors Cards Section */}
                <motion.div 
                    className="mb-16"
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1.4 }}
                >
                    <DoctorsCardCarousel />
                </motion.div>

                {/* CTA Section */}
                <motion.div 
                    className="text-center"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.6 }}
                >
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link href="/doctor">
                            <motion.button
                                className="group inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-semibold text-lg px-10 py-4 transition-all duration-300 ease-in-out shadow-xl hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-emerald-300 focus:ring-opacity-50 min-w-[200px]"
                                whileHover={{ 
                                    scale: 1.05,
                                    boxShadow: "0 25px 50px rgba(16, 185, 129, 0.3)"
                                }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <span className="mr-3">View All Doctors</span>
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

                        <Link href="/appointment">
                            <motion.button
                                className="group inline-flex items-center justify-center rounded-xl border-2 border-slate-300 bg-white/80 backdrop-blur-sm hover:bg-white text-slate-700 font-semibold text-lg px-10 py-4 transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-slate-200 focus:ring-opacity-50 min-w-[200px]"
                                whileHover={{ 
                                    scale: 1.05,
                                    borderColor: "#10b981",
                                    backgroundColor: "rgba(255, 255, 255, 0.95)"
                                }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <span className="mr-3">Book Appointment</span>
                                <svg 
                                    className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24"
                                >
                                    <path 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        strokeWidth={2} 
                                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
                                    />
                                </svg>
                            </motion.button>
                        </Link>
                    </div>

                    {/* Additional Info */}
                    <motion.p 
                        className="text-slate-600 mt-6 text-base"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 1.8 }}
                    >
                        Available 24/7 for consultations and emergency care
                    </motion.p>
                </motion.div>
            </div>
        </section>
    )
}

export default Doctors;