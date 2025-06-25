'use client'

import { motion } from 'framer-motion'
import { TestimonialCardCarousel } from "./TestimonialsCardCarousel";

const Testimonial = () => {
    const testimonials = [
        {
            id: 1,
            name: "Rezwan Rahim",
            title: "Patient",
            testimonial: "This healthcare platform has revolutionized my medical experience. The doctors are incredibly professional, and the booking system is seamless. I've never felt more confident about my healthcare decisions!",
            image: "https://rezwan-rahim.web.app/static/media/profile.821f5e54547ab118ba77.jpg",
            rating: 5,
            location: "Dhaka, Bangladesh",
            treatmentType: "General Consultation"
        },
        {
            id: 2,
            name: "Sarah Johnson",
            title: "Patient",
            testimonial: "Outstanding medical service! The telemedicine feature saved me during the pandemic, and the follow-up care has been exceptional. The doctors truly care about their patients' well-being.",
            image: "https://images.unsplash.com/photo-1494790108755-2616b332c5ca?w=150&h=150&fit=crop&crop=face",
            rating: 5,
            location: "New York, USA",
            treatmentType: "Cardiology Consultation"
        },
        {
            id: 3,
            name: "Ahmed Hassan",
            title: "Patient",
            testimonial: "The quality of care and attention to detail is remarkable. From scheduling to treatment, everything is handled professionally. I highly recommend this platform to anyone seeking quality healthcare.",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
            rating: 5,
            location: "Dubai, UAE",
            treatmentType: "Orthopedic Treatment"
        },
        {
            id: 4,
            name: "Emily Chen",
            title: "Patient",
            testimonial: "As a busy professional, I appreciate how easy it is to book appointments and receive quality care. The doctors are knowledgeable, and the support staff is always helpful and courteous.",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
            rating: 5,
            location: "Singapore",
            treatmentType: "Dermatology Consultation"
        },
        {
            id: 5,
            name: "Michael Rodriguez",
            title: "Patient",
            testimonial: "Exceptional healthcare platform with cutting-edge technology. The diagnostic tools and personalized treatment plans have significantly improved my health outcomes. Truly five-star service!",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
            rating: 5,
            location: "London, UK",
            treatmentType: "Internal Medicine"
        },
    ];

    const stats = [
        { number: "10K+", label: "Happy Patients", icon: "😊" },
        { number: "4.9/5", label: "Average Rating", icon: "⭐" },
        { number: "99%", label: "Satisfaction Rate", icon: "💯" },
        { number: "24/7", label: "Support Available", icon: "🏥" }
    ];

    return (
        <section className="relative py-16 sm:py-20 lg:py-24 xl:py-28 bg-gradient-to-br from-blue-50 via-white to-emerald-50 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDEwIDAgTCAwIDAgMCAxMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMTY0ZTYzIiBzdHJva2Utd2lkdGg9IjEiLz48cGF0aCBkPSJNIDYwIDAgTCAwIDAgMCA2MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMTY0ZTYzIiBzdHJva2Utd2lkdGg9IjAuNSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>
            </div>

            {/* Decorative Background Shapes */}
            <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-full opacity-40 blur-3xl"></div>
            <div className="absolute bottom-20 left-10 w-40 h-40 bg-gradient-to-br from-emerald-200 to-teal-200 rounded-full opacity-40 blur-3xl"></div>
            <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full opacity-30 blur-2xl"></div>

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
                        className="inline-flex items-center py-2 px-4 mb-6 text-sm font-semibold text-blue-700 bg-blue-50 border border-blue-200 rounded-full shadow-sm"
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <span className="text-blue-500 mr-2">●</span>
                        Patient Testimonials
                    </motion.div>

                    {/* Main Heading */}
                    <motion.h1 
                        className="text-4xl sm:text-5xl lg:text-6xl xl:text-5xl 2xl:text-6xl font-bold text-slate-900 leading-tight mb-6"
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        What Our 
                        <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent"> Patients Say</span>
                    </motion.h1>

                    {/* Description */}
                    <motion.p 
                        className="text-lg sm:text-xl lg:text-2xl text-slate-600 leading-relaxed max-w-3xl mx-auto mb-12"
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        Real stories from real patients who have experienced exceptional healthcare through our platform. Their trust and satisfaction drive our commitment to excellence.
                    </motion.p>

                   
                </motion.div>

                {/* Testimonials Cards Section */}
                <motion.div 
                    className="mb-16"
                    initial={{ opacity: 0, y: 80 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1.6 }}
                >
                    <TestimonialCardCarousel data={testimonials} />
                </motion.div>

                {/* Bottom CTA Section */}
                <motion.div 
                    className="text-center bg-gradient-to-r from-blue-50 to-emerald-50 rounded-3xl p-8 md:p-12 border border-slate-200"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.8 }}
                >
                    <div className="max-w-2xl mx-auto">
                        <motion.h3 
                            className="text-2xl md:text-3xl font-bold text-slate-900 mb-4"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 2 }}
                        >
                            Ready to Experience Excellence?
                        </motion.h3>
                        
                        <motion.p 
                            className="text-slate-600 text-lg mb-8"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 2.2 }}
                        >
                            Join thousands of satisfied patients who trust us with their healthcare needs
                        </motion.p>

                        <motion.div 
                            className="flex flex-col sm:flex-row gap-4 justify-center"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 2.4 }}
                        >
                            <motion.button
                                className="group inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-500 hover:to-emerald-500 text-white font-semibold text-lg px-8 py-4 transition-all duration-300 ease-in-out shadow-xl hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50 min-w-[200px]"
                                whileHover={{ 
                                    scale: 1.05,
                                    boxShadow: "0 25px 50px rgba(59, 130, 246, 0.3)"
                                }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <span className="mr-3">Book Appointment</span>
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
                                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
                                    />
                                </svg>
                            </motion.button>

                            <motion.button
                                className="group inline-flex items-center justify-center rounded-xl border-2 border-slate-300 bg-white hover:bg-slate-50 text-slate-700 font-semibold text-lg px-8 py-4 transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-slate-200 focus:ring-opacity-50 min-w-[200px]"
                                whileHover={{ 
                                    scale: 1.05,
                                    borderColor: "#10b981"
                                }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <span className="mr-3">Learn More</span>
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
                                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
                                    />
                                </svg>
                            </motion.button>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Testimonial;