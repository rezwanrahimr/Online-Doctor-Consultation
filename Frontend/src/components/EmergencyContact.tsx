'use client'

import HelpingImg from "../images/helpline_img.png"
import Image from 'next/image'
import { motion } from 'framer-motion'

const EmergencyContact = () => {
    const emergencyFeatures = [
        {
            icon: "🏥",
            title: "24/7 Contact Our Hospital",
            description: "Round-the-clock availability for immediate medical assistance"
        },
        {
            icon: "⏰",
            title: "24 hours Open Our Hospital",
            description: "Always accessible emergency care when you need it most"
        },
        {
            icon: "📞",
            title: "Emergency Contact Our Phone Number",
            description: "Direct line to our emergency response team"
        }
    ]

    const contactCards = [
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
            ),
            title: "Emergency Hotline",
            subtitle: "24/7 Available",
            contact: "+880 1678392594",
            bgGradient: "from-red-500 to-rose-600",
            accentColor: "red"
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                </svg>
            ),
            title: "Quick Email Response",
            subtitle: "Urgent Inquiries",
            contact: "rezwanrahim99@gmail.com",
            bgGradient: "from-emerald-500 to-teal-600",
            accentColor: "emerald"
        }
    ]

    return (
        <section className="relative py-16 sm:py-20 lg:py-24 xl:py-28 bg-gradient-to-br from-red-50 via-white to-rose-50 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDEwIDAgTCAwIDAgMCAxMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZGMxODE4IiBzdHJva2Utd2lkdGg9IjEiLz48cGF0aCBkPSJNIDYwIDAgTCAwIDAgMCA2MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZGMxODE4IiBzdHJva2Utd2lkdGg9IjAuNSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>
            </div>

            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 pt-12">
                <motion.div
                    className="flex flex-col xl:flex-row-reverse items-center justify-between gap-12 lg:gap-16 xl:gap-20"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    {/* Image Section */}
                    <motion.div
                        className="relative w-full xl:w-1/2 order-2 xl:order-1"
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.3 }}
                    >
                        <div className="relative flex justify-center xl:justify-end max-w-lg mx-auto xl:mx-0 xl:ml-auto">
                            {/* Decorative Background Shapes */}
                            <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-red-200 to-rose-200 rounded-full opacity-60 blur-2xl"></div>
                            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-gradient-to-br from-orange-200 to-red-200 rounded-full opacity-60 blur-2xl"></div>
                            
                            {/* Main Image Container */}
                            <div className="relative z-10">
                                <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-white p-3">
                                    <Image
                                        src={HelpingImg}
                                        className="w-full max-w-sm lg:max-w-md xl:max-w-sm 2xl:max-w-md rounded-2xl object-cover"
                                        alt="Emergency medical support and healthcare professionals"
                                        sizes="(max-width: 640px) 300px, (max-width: 1024px) 400px, 450px"
                                    />
                                    {/* Emergency Badge */}
                                    <div className="absolute top-6 right-6 bg-red-500 text-white rounded-full px-4 py-2 shadow-lg">
                                        <div className="flex items-center gap-2">
                                            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                                            <span className="text-xs font-bold">EMERGENCY</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Floating Emergency Stats */}
                            <div className="absolute bottom-8 -left-4 sm:-left-8 z-20">
                                <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-red-100">
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-red-600 mb-1">24/7</div>
                                        <div className="text-xs text-slate-600 font-medium">Emergency Care</div>
                                        <div className="text-xs text-slate-500 mt-1">Always Available</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Content Section */}
                    <motion.div
                        className="w-full xl:w-1/2 text-center xl:text-left order-1 xl:order-2"
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                        {/* Section Badge */}
                        <motion.div 
                            className="inline-flex items-center py-2 px-4 mb-6 text-sm font-semibold text-red-700 bg-red-50 border border-red-200 rounded-full shadow-sm"
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.7 }}
                        >
                            <span className="text-red-500 mr-2">●</span>
                            Emergency Helpline Service
                        </motion.div>

                        {/* Main Heading */}
                        <motion.h1 
                            className="text-3xl sm:text-4xl lg:text-5xl xl:text-4xl 2xl:text-5xl font-bold text-slate-900 leading-tight mb-6"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.9 }}
                        >
                            Need Emergency 
                            <span className="bg-gradient-to-r from-red-600 to-rose-600 bg-clip-text text-transparent"> Contact?</span>
                        </motion.h1>

                        {/* Description */}
                        <motion.p 
                            className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed mb-8 max-w-2xl mx-auto xl:mx-0"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 1.1 }}
                        >
                            At Online Doctor, we are committed to delivering top-notch healthcare services with a patient-first approach. Our dedicated team of experienced professionals provides immediate emergency response and comprehensive medical care around the clock.
                        </motion.p>

                        {/* Emergency Features */}
                        <motion.div 
                            className="space-y-4 mb-10"
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 1.3 }}
                        >
                            {emergencyFeatures.map((feature, index) => (
                                <motion.div 
                                    key={feature.title}
                                    className="flex items-start gap-4 p-4 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md hover:border-red-200 transition-all duration-300"
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.6, delay: 1.5 + (index * 0.1) }}
                                    whileHover={{ scale: 1.02, x: 5 }}
                                >
                                    <div className="flex-shrink-0">
                                        <div className="w-12 h-12 bg-gradient-to-br from-red-100 to-rose-100 rounded-xl flex items-center justify-center text-xl">
                                            {feature.icon}
                                        </div>
                                    </div>
                                    <div className="text-left">
                                        <h4 className="font-semibold text-slate-900 mb-1">{feature.title}</h4>
                                        <p className="text-sm text-slate-600">{feature.description}</p>
                                    </div>
                                    <div className="flex-shrink-0 ml-auto">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-red-500">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                        </svg>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Emergency Contact Cards - FIXED VERSION */}
                        <motion.div 
                            className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8 w-full"
                            initial={{ y: 40, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 1.8 }}
                        >
                            {contactCards.map((card, index) => (
                                <motion.div
                                    key={card.title}
                                    className="group relative overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100"
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.6, delay: 2 + (index * 0.2) }}
                                    whileHover={{ y: -5, scale: 1.02 }}
                                >
                                    {/* Gradient Background */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${card.bgGradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                                    
                                    <div className="relative p-6">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className={`w-14 h-14 bg-gradient-to-br ${card.bgGradient} rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                                {card.icon}
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <h4 className="font-bold text-slate-900 text-lg">{card.title}</h4>
                                                <p className="text-sm text-slate-500">{card.subtitle}</p>
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            {/* Contact info with proper text wrapping */}
                                            <div className="min-w-0">
                                                <p className={`text-sm sm:text-base font-semibold text-${card.accentColor}-600 break-all`}>
                                                    {card.contact}
                                                </p>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <div className={`w-2 h-2 bg-${card.accentColor}-500 rounded-full animate-pulse`}></div>
                                                <span className="text-xs text-slate-600 font-medium">Available Now</span>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* Call to Action Arrow */}
                                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className={`w-8 h-8 bg-${card.accentColor}-500 rounded-full flex items-center justify-center text-white`}>
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Emergency Action Button */}
                        <motion.div 
                            className="flex justify-center xl:justify-start"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 2.4 }}
                        >
                            <motion.button
                                className="group inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-bold text-lg px-10 py-5 transition-all duration-300 ease-in-out shadow-2xl hover:shadow-red-500/25 focus:outline-none focus:ring-4 focus:ring-red-300 focus:ring-opacity-50 min-w-[240px]"
                                whileHover={{ 
                                    scale: 1.05,
                                    boxShadow: "0 25px 50px rgba(220, 38, 38, 0.4)"
                                }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <span className="mr-3">Call Emergency Now</span>
                                <svg 
                                    className="w-6 h-6 group-hover:rotate-12 transition-transform duration-200" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24"
                                >
                                    <path 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        strokeWidth={2} 
                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" 
                                    />
                                </svg>
                            </motion.button>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

export default EmergencyContact;