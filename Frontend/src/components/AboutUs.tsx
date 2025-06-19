'use client'

import AboutImg1 from "../images/about-img1.jpg"
import AboutImg2 from "../images/about_img2.jpg"
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from "next/link"

const AboutUs = () => {
    return (
        <section className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
                <motion.div
                    className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 xl:gap-16"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    {/* Image Section */}
                    <motion.div
                        className="relative w-full lg:w-1/2 xl:w-5/12 order-2 lg:order-1"
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                        <div className="relative flex justify-center lg:justify-start max-w-md sm:max-w-lg lg:max-w-none mx-auto lg:mx-0">
                            {/* Main Image */}
                            <div className="relative z-10">
                                <Image
                                    src={AboutImg1}
                                    className="w-full max-w-xs sm:max-w-sm lg:max-w-xs xl:max-w-sm rounded-3xl shadow-xl object-cover"
                                    alt="Medical professionals providing healthcare services"
                                    sizes="(max-width: 640px) 300px, (max-width: 1024px) 350px, 400px"
                                />
                            </div>
                            
                            {/* Overlay Image */}
                            <div className="absolute top-16 sm:top-20 lg:top-12 xl:top-16 right-0 sm:right-4 lg:right-8 xl:right-12 z-20">
                                <Image
                                    src={AboutImg2}
                                    className="w-32 sm:w-40 md:w-48 lg:w-36 xl:w-44 rounded-3xl shadow-lg object-cover border-4 border-white"
                                    alt="Hospital facility and medical equipment"
                                    sizes="(max-width: 640px) 150px, (max-width: 1024px) 180px, 200px"
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Text Section */}
                    <motion.div
                        className="w-full lg:w-1/2 xl:w-7/12 text-center lg:text-left order-1 lg:order-2"
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 1 }}
                    >
                        {/* Section Badge */}
                        <motion.p 
                            className="inline-block py-2 px-4 mb-4 text-sm sm:text-base lg:text-lg font-dm-sans font-bold text-color-secondary leading-tight bg-white rounded-full shadow-sm"
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 1.2 }}
                        >
                            | About Us
                        </motion.p>

                        {/* Main Heading */}
                        <motion.h2 
                            className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-semibold font-work-sans text-color-black leading-tight mb-4 lg:mb-6"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 1.4 }}
                        >
                            The Great Place of Medical Hospital Center.
                        </motion.h2>

                        {/* Description */}
                        <motion.p 
                            className="text-sm sm:text-base lg:text-lg xl:text-xl font-dm-sans leading-relaxed text-gray-700 mb-6 lg:mb-8 max-w-2xl mx-auto lg:mx-0"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 1.6 }}
                        >
                            At Online Doctor, we are committed to delivering top-notch healthcare services with a patient-first approach. Our dedicated team of experienced professionals strives to provide personalized and compassionate care to every individual who walks through our doors.
                        </motion.p>

                        {/* Features List */}
                        <motion.div 
                            className="space-y-3 sm:space-y-4 mb-6 lg:mb-8"
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 1.8 }}
                        >
                            {[
                                "24/7 Contact Our Hospital",
                                "24 hours Open Our Hospital", 
                                "Emergency Contact Our Phone Number"
                            ].map((feature, index) => (
                                <motion.div 
                                    key={feature}
                                    className="flex items-start sm:items-center gap-3 sm:gap-4 text-sm sm:text-base lg:text-lg xl:text-xl font-dm-sans"
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.6, delay: 2 + (index * 0.1) }}
                                >
                                    <div className="flex-shrink-0 mt-1 sm:mt-0">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={2}
                                            stroke="white"
                                            className="w-5 h-5 sm:w-6 sm:h-6 bg-color-primary rounded-full p-1"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                        </svg>
                                    </div>
                                    <p className="text-gray-700">{feature}.</p>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* CTA Button */}
                        <motion.div 
                            className="flex justify-center lg:justify-start"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 2.3 }}
                        >
                            <Link href="/about">
                                <motion.button
                                    className="inline-flex items-center justify-center rounded-full bg-color-primary hover:bg-opacity-90 text-color-white font-semibold text-sm sm:text-base lg:text-lg px-6 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-5 transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50"
                                    whileHover={{ 
                                        scale: 1.05,
                                        boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <span className="mr-2">Discover More</span>
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
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

export default AboutUs;