import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Scrollbar, A11y, EffectCoverflow } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

import service1 from "../images/service-1.jpg";
import service2 from "../images/service-2.jpg";
import service3 from "../images/service-3.jpg";
import Image from 'next/image';

export const ServiceCardCarousel = () => {
    const services = [
        {
            title: "Cardiology",
            description: "Comprehensive heart care and treatments, including ECG, stress tests, and advanced cardiac surgery.",
            image: service1,
            icon: "❤️",
            features: ["ECG Testing", "Cardiac Surgery", "Heart Monitoring"]
        },
        {
            title: "Orthopedics", 
            description: "Expert care for bone and joint issues, including fractures, arthritis, and joint replacement surgeries.",
            image: service2,
            icon: "🦴",
            features: ["Fracture Care", "Joint Replacement", "Sports Medicine"]
        },
        {
            title: "Pediatrics",
            description: "Compassionate care for children, from routine check-ups to immunizations and specialized treatments.",
            image: service3,
            icon: "👶",
            features: ["Vaccinations", "Growth Monitoring", "Child Development"]
        },
        {
            title: "Dental Care",
            description: "State-of-the-art dental services including cleanings, fillings, root canals, and cosmetic dentistry.",
            image: service1,
            icon: "🦷",
            features: ["Cleanings", "Root Canals", "Cosmetic Dentistry"]
        },
        {
            title: "Dermatology",
            description: "Advanced skin care services for conditions like acne, eczema, psoriasis, and cosmetic treatments.",
            image: service3,
            icon: "🌟",
            features: ["Skin Analysis", "Acne Treatment", "Cosmetic Procedures"]
        },
    ];

    return (
        <div className="relative">
            <Swiper
                modules={[Autoplay, Pagination, Scrollbar, A11y]}
                spaceBetween={30}
                slidesPerView={1}
                pagination={{ 
                    clickable: true,
                    bulletClass: 'swiper-pagination-bullet',
                    bulletActiveClass: 'swiper-pagination-bullet-active',
                }}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                loop={true}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    1280: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                }}
                className="pb-12"
            >
                {services.map((service, index) => (
                    <SwiperSlide key={index}>
                        <motion.div 
                            className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-100"
                            whileHover={{ y: -8 }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            {/* Image Section */}
                            <div className="relative overflow-hidden">
                                <div className="aspect-[4/3] relative">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    />
                                    {/* Overlay Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    
                                    {/* Service Icon */}
                                    <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-xl shadow-lg">
                                        {service.icon}
                                    </div>
                                    
                                    {/* Professional Badge */}
                                    <div className="absolute top-4 left-4 bg-emerald-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                                        Premium Care
                                    </div>
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="p-6">
                                {/* Title */}
                                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors duration-300">
                                    {service.title}
                                </h3>

                                {/* Description */}
                                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                                    {service.description}
                                </p>

                                {/* Features */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {service.features.map((feature, featureIndex) => (
                                        <span 
                                            key={featureIndex}
                                            className="px-3 py-1 bg-emerald-50 text-emerald-700 text-xs rounded-full border border-emerald-200"
                                        >
                                            {feature}
                                        </span>
                                    ))}
                                </div>

                                {/* Action Button */}
                                <div className="flex items-center justify-between">
                                    <button className="group/btn inline-flex items-center text-emerald-600 hover:text-emerald-700 font-semibold text-sm transition-colors duration-200">
                                        <span className="mr-2">Learn More</span>
                                        <svg 
                                            className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" 
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
                                    </button>
                                    
                                    {/* Availability Indicator */}
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                        <span className="text-xs text-slate-500">Available Now</span>
                                    </div>
                                </div>
                            </div>

                            {/* Hover Effect Border */}
                            <div className="absolute inset-0 rounded-3xl border-2 border-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                        </motion.div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Custom Pagination Styles */}
            <style jsx global>{`
                .swiper-pagination-bullet {
                    width: 12px;
                    height: 12px;
                    background: rgba(16, 185, 129, 0.3);
                    opacity: 1;
                    transition: all 0.3s ease;
                }
                .swiper-pagination-bullet-active {
                    background: #10b981;
                    transform: scale(1.2);
                }
                .swiper-pagination {
                    bottom: 0 !important;
                }
            `}</style>
        </div>
    );
};