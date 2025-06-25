'use client';

import FaqImg from "../images/faq-img.jpg";
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            title: "What services do you offer?",
            content: "We provide comprehensive medical services including cardiology, orthopedics, pediatrics, dental care, dermatology, and emergency care with 24/7 availability."
        },
        {
            title: "How do I schedule an appointment?",
            content: "You can schedule an appointment through our online booking system, by calling our patient care line, or by visiting our facility directly. We offer same-day appointments for urgent care."
        },
        {
            title: "Do you accept insurance?",
            content: "Yes, we accept most major insurance plans. Our billing department can verify your coverage and help you understand your benefits before your visit."
        },
        {
            title: "What should I bring to my appointment?",
            content: "Please bring a valid ID, insurance card, list of current medications, and any relevant medical records or test results from previous visits."
        },
        {
            title: "Are telemedicine consultations available?",
            content: "Yes, we offer secure telemedicine consultations for follow-up visits, routine check-ups, and non-emergency medical consultations through our patient portal."
        },
    ];

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="relative py-16 sm:py-20 lg:py-24 xl:py-28 bg-gradient-to-br from-white via-slate-50 to-emerald-50 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDEwIDAgTCAwIDAgMCAxMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMTY0ZTYzIiBzdHJva2Utd2lkdGg9IjEiLz48cGF0aCBkPSJNIDYwIDAgTCAwIDAgMCA2MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMTY0ZTYzIiBzdHJva2Utd2lkdGg9IjAuNSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-emerald-200 to-teal-200 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute bottom-20 left-10 w-40 h-40 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-full opacity-20 blur-3xl"></div>

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
                        FAQ
                    </motion.div>

                    {/* Main Heading */}
                    <motion.h2 
                        className="text-3xl sm:text-4xl lg:text-5xl xl:text-4xl 2xl:text-5xl font-bold text-slate-900 leading-tight mb-6"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        Frequently Asked 
                        <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent"> Questions</span>
                    </motion.h2>

                    {/* Description */}
                    <motion.p 
                        className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        Find answers to the most common questions about our medical services, 
                        appointments, and patient care to help you get the information you need.
                    </motion.p>
                </motion.div>

                {/* Main Content */}
                <motion.div
                    className="flex flex-col xl:flex-row items-center justify-between gap-12 lg:gap-16 xl:gap-20"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                >
                    {/* Image Section */}
                    <motion.div
                        className="relative w-full xl:w-1/2 order-2 xl:order-1"
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 1 }}
                    >
                        <div className="relative flex justify-center xl:justify-start max-w-lg mx-auto xl:mx-0">
                            {/* Decorative Background Shape */}
                            <div className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-br from-emerald-200 to-teal-200 rounded-full opacity-60 blur-2xl"></div>
                            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-full opacity-60 blur-2xl"></div>
                            
                            {/* Main Image Container */}
                            <div className="relative z-10">
                                <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-white p-3">
                                    <Image
                                        src={FaqImg}
                                        className="w-full max-w-sm lg:max-w-md xl:max-w-sm 2xl:max-w-md rounded-2xl object-cover"
                                        alt="Medical FAQ and patient support"
                                        sizes="(max-width: 640px) 300px, (max-width: 1024px) 400px, 450px"
                                    />
                                    {/* FAQ Badge */}
                                    <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                                        <div className="flex items-center gap-2">
                                            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                                            <span className="text-xs font-semibold text-slate-700">24/7 Support</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Help Card */}
                            <div className="absolute -bottom-6 -right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-slate-200 xl:block hidden">
                                <div className="text-center">
                                    <div className="text-2xl mb-2">💬</div>
                                    <div className="text-sm font-semibold text-slate-900">Need Help?</div>
                                    <div className="text-xs text-slate-600">Contact us anytime</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* FAQ Section */}
                    <motion.div
                        className="w-full xl:w-1/2 order-1 xl:order-2"
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <motion.div 
                                    key={index}
                                    className="group bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-lg transition-all duration-300"
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.6, delay: 1.2 + (index * 0.1) }}
                                >
                                    <button
                                        onClick={() => toggleFAQ(index)}
                                        className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-slate-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-inset"
                                        aria-expanded={activeIndex === index}
                                    >
                                        <span className="text-lg font-semibold text-slate-900 pr-4">
                                            {faq.title}
                                        </span>
                                        <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center transition-all duration-300 ${activeIndex === index ? 'bg-emerald-500 rotate-45' : 'group-hover:bg-emerald-200'}`}>
                                            <svg 
                                                className={`w-4 h-4 transition-colors duration-300 ${activeIndex === index ? 'text-white' : 'text-emerald-600'}`}
                                                fill="none" 
                                                stroke="currentColor" 
                                                viewBox="0 0 24 24"
                                            >
                                                <path 
                                                    strokeLinecap="round" 
                                                    strokeLinejoin="round" 
                                                    strokeWidth={2} 
                                                    d="M12 6v6m0 0v6m0-6h6m-6 0H6" 
                                                />
                                            </svg>
                                        </div>
                                    </button>
                                    
                                    <motion.div
                                        initial={false}
                                        animate={{
                                            height: activeIndex === index ? 'auto' : 0,
                                            opacity: activeIndex === index ? 1 : 0
                                        }}
                                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-6 pb-5">
                                            <div className="pt-2 border-t border-slate-100">
                                                <p className="text-slate-600 leading-relaxed mt-3">
                                                    {faq.content}
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Contact Support */}
                        <motion.div 
                            className="mt-8 p-6 bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-2xl"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 2 }}
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-white text-xl">
                                    📞
                                </div>
                                <div>
                                    <h3 className="font-semibold text-slate-900 mb-1">Still have questions?</h3>
                                    <p className="text-slate-600 text-sm">Our support team is here to help you 24/7</p>
                                </div>
                                <button className="ml-auto px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl font-medium transition-colors duration-200">
                                    Contact Us
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

export default FAQ;