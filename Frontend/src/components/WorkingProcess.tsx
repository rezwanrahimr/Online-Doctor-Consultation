'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const WorkingProcess = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, threshold: 0.1 });

    const features = [
        {
            step: "01",
            name: 'Fill The Form',
            description: 'Start by filling out our simple form to provide essential details about your medical needs.',
            bgColor: "bg-emerald-500"
        },
        {
            step: "02", 
            name: 'Book An Appointment',
            description: 'Easily schedule an appointment with our experts at your convenience.',
            bgColor: "bg-blue-500"
        },
        {
            step: "03",
            name: 'Check-Ups',
            description: 'Receive thorough check-ups from our qualified medical professionals.',
            bgColor: "bg-purple-500"
        },
        {
            step: "04",
            name: 'Get Reports',
            description: 'Access detailed medical reports quickly and securely.',
            bgColor: "bg-orange-500"
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { 
                staggerChildren: 0.2 
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: { 
                duration: 0.6
            } 
        }
    };

    return (
        <section className="py-16 sm:py-20 lg:py-24 bg-slate-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    variants={containerVariants}
                >
                    {/* Header */}
                    <motion.div 
                        className="text-center mb-16"
                        variants={itemVariants}
                    >
                        <div className="inline-flex items-center py-2 px-4 mb-6 text-sm font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-full">
                            <span className="text-emerald-500 mr-2">●</span>
                            How We Work
                        </div>

                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-6">
                            Our Working Process
                        </h2>

                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            Our streamlined process ensures you receive quality healthcare through four simple steps.
                        </p>
                    </motion.div>

                    {/* Process Grid */}
                    <motion.div 
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                        variants={containerVariants}
                    >
                        {features.map((feature, index) => (
                            <motion.div
                                key={feature.step}
                                className="text-center"
                                variants={itemVariants}
                            >
                                <div className={`w-16 h-16 ${feature.bgColor} rounded-full flex items-center justify-center mx-auto mb-6`}>
                                    <span className="text-white font-bold text-xl">{feature.step}</span>
                                </div>
                                
                                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                                    {feature.name}
                                </h3>
                                
                                <p className="text-slate-600 leading-relaxed">
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default WorkingProcess;