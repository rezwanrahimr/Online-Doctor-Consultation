'use client'

import { ServiceCardCarousel } from "./ServiceCardCarousel";
import { motion } from 'framer-motion'

const Service = () => {
    return (
        <section className="relative py-16 sm:py-20 lg:py-24 xl:py-28 bg-gradient-to-br from-slate-50 via-white to-emerald-50 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDEwIDAgTCAwIDAgMCAxMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMTY0ZTYzIiBzdHJva2Utd2lkdGg9IjEiLz48cGF0aCBkPSJNIDYwIDAgTCAwIDAgMCA2MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMTY0ZTYzIiBzdHJva2Utd2lkdGg9IjAuNSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-emerald-200 to-teal-200 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-full opacity-20 blur-3xl"></div>

            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
                {/* Header Section */}
                <motion.div 
                    className="text-center mb-12 lg:mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Section Badge */}
                    <motion.div 
                        className="inline-flex items-center py-2 px-4 mb-6 text-sm font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-full shadow-sm"
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <span className="text-emerald-500 mr-2">●</span>
                        Our Services
                    </motion.div>

                    {/* Main Heading */}
                    <motion.h2 
                        className="text-3xl sm:text-4xl lg:text-5xl xl:text-4xl 2xl:text-5xl font-bold text-slate-900 leading-tight mb-6"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        Comprehensive 
                        <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent"> Medical Services</span>
                    </motion.h2>

                    {/* Description */}
                    <motion.p 
                        className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        Experience world-class healthcare with our comprehensive range of medical services, 
                        delivered by expert professionals using state-of-the-art technology and compassionate care.
                    </motion.p>
                </motion.div>

                {/* Services Carousel */}
                <motion.div 
                    className="relative"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    <ServiceCardCarousel />
                </motion.div>

                {/* Additional Features */}
                <motion.div 
                    className="mt-16 lg:mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                >
                    <div className="text-center">
                        <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4">
                            🏆
                        </div>
                        <h3 className="text-xl font-semibold text-slate-900 mb-2">Award-Winning Care</h3>
                        <p className="text-slate-600">Recognized for excellence in patient care and medical innovation</p>
                    </div>
                    <div className="text-center">
                        <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4">
                            🔬
                        </div>
                        <h3 className="text-xl font-semibold text-slate-900 mb-2">Advanced Technology</h3>
                        <p className="text-slate-600">Latest medical equipment and cutting-edge treatment methods</p>
                    </div>
                    <div className="text-center">
                        <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4">
                            👥
                        </div>
                        <h3 className="text-xl font-semibold text-slate-900 mb-2">Expert Team</h3>
                        <p className="text-slate-600">Highly qualified specialists with years of experience</p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Service;