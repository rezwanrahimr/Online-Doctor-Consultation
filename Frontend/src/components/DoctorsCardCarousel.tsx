'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { authHeader } from '@/utils';
import { FaLinkedin, FaTwitter, FaStar, FaStethoscope, FaCalendarAlt, FaUser } from 'react-icons/fa';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { selectedDoctor } from '@/redux/slices/doctorSlice';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

const DoctorsCardCarousel = () => {
    const [doctors, setDoctors] = useState([]);
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    const router = useRouter();

    useEffect(() => {
        const baseURL = process.env.NEXT_PUBLIC_API_URL;
        const fetchDoctors = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`${baseURL}/api/public/doctor/all`, {
                    headers: authHeader(),
                });
                setDoctors(response.data);
            } catch (err) {
                console.error('Error fetching doctors:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchDoctors();
    }, []);

    const handleViewDoctor = (doctor) => {
        dispatch(selectedDoctor(doctor));
        router.push('/doctor/details');
    };

    // Loading skeleton
    if (loading) {
        return (
            <div className="container mx-auto px-4 py-6">
                <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {[...Array(6)].map((_, index) => (
                        <div key={index} className="bg-white rounded-3xl p-8 shadow-lg animate-pulse">
                            <div className="flex flex-col items-center gap-4">
                                <div className="w-32 h-32 bg-gray-200 rounded-full"></div>
                                <div className="w-40 h-4 bg-gray-200 rounded"></div>
                                <div className="w-32 h-3 bg-gray-200 rounded"></div>
                            </div>
                            <div className="mt-6 space-y-3">
                                <div className="w-full h-3 bg-gray-200 rounded"></div>
                                <div className="w-3/4 h-3 bg-gray-200 rounded"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-6">
            <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {doctors.map((doctor, index) => (
                    <motion.div
                        key={doctor._id}
                        className="relative group bg-white/80 backdrop-blur-sm shadow-xl rounded-3xl p-8 flex flex-col justify-between h-full border border-slate-200 hover:border-emerald-300 transition-all duration-500 overflow-hidden"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        whileHover={{ 
                            y: -10,
                            boxShadow: "0 25px 50px rgba(16, 185, 129, 0.15)"
                        }}
                    >
                        {/* Background Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 to-teal-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        
                        {/* Content */}
                        <div className="relative z-10">
                            {/* Doctor Profile Section */}
                            <div className="flex flex-col items-center gap-6 mb-6">
                                <div className="relative">
                                    {/* Profile Image Container */}
                                    <div className="relative w-32 h-32 rounded-full overflow-hidden ring-4 ring-white shadow-xl group-hover:ring-emerald-200 transition-all duration-300">
                                        <Image
                                            src={doctor.profile_picture_url || '/images/user.png'}
                                            alt={doctor.full_name}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                                            sizes="128px"
                                        />
                                    </div>
                                    
                                    {/* Online Status Badge */}
                                    <div className="absolute -bottom-2 -right-2 bg-green-500 w-6 h-6 rounded-full border-4 border-white flex items-center justify-center">
                                        <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                                    </div>
                                </div>

                                <div className="text-center">
                                    <h2 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors duration-300">
                                        {doctor.full_name}
                                    </h2>
                                    
                                    {/* Specialization Badge */}
                                    <div className="inline-flex items-center px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-3">
                                        <FaStethoscope className="mr-2 text-xs" />
                                        {doctor.specialization}
                                    </div>
                                    
                                    {/* Experience */}
                                    <div className="flex items-center justify-center text-slate-600 text-sm">
                                        <FaUser className="mr-2 text-emerald-500" />
                                        <span className="font-medium">{doctor.experience_years} years experience</span>
                                    </div>
                                </div>
                            </div>

                            {/* Bio Section */}
                            <div className="mb-6">
                                <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
                                    {doctor.bio}
                                </p>
                            </div>

                            {/* Fee Section */}
                            <div className="mb-6">
                                <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-4 border border-emerald-100">
                                    <div className="flex items-center justify-between">
                                        <span className="text-slate-700 font-medium">Consultation Fee</span>
                                        <span className="text-2xl font-bold text-emerald-600">${doctor.consultation_fee}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Ratings and Social Links Section */}
                            <div className="flex items-center justify-between mb-6 pb-6 border-b border-slate-200">
                                {/* Ratings */}
                                <div className="flex items-center gap-2">
                                    <div className="flex items-center">
                                        <FaStar className="text-yellow-400 text-sm" />
                                        <span className="ml-1 font-semibold text-slate-900">
                                            {doctor.ratings.average_rating}
                                        </span>
                                    </div>
                                    <span className="text-xs text-slate-500">
                                        ({doctor.ratings.total_reviews} reviews)
                                    </span>
                                </div>

                                {/* Social Links */}
                                <div className="flex gap-3">
                                    {doctor.social_links.linkedin && (
                                        <a
                                            href={doctor.social_links.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-8 h-8 bg-blue-100 hover:bg-blue-600 text-blue-600 hover:text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                                        >
                                            <FaLinkedin size={14} />
                                        </a>
                                    )}
                                    {doctor.social_links.twitter && (
                                        <a
                                            href={doctor.social_links.twitter}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-8 h-8 bg-blue-100 hover:bg-blue-400 text-blue-400 hover:text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                                        >
                                            <FaTwitter size={14} />
                                        </a>
                                    )}
                                </div>
                            </div>

                            {/* Action Buttons Section */}
                            <div className="flex flex-col gap-3">
                                <Link href="/appointment">
                                    <motion.button 
                                        className="group w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <FaCalendarAlt className="mr-2" />
                                        <span>Book Appointment</span>
                                        <svg 
                                            className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" 
                                            fill="none" 
                                            stroke="currentColor" 
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </motion.button>
                                </Link>
                                
                                <motion.button
                                    className="group w-full bg-white hover:bg-slate-50 text-slate-700 font-semibold py-3 px-6 rounded-xl border-2 border-slate-200 hover:border-emerald-300 transition-all duration-300 flex items-center justify-center"
                                    onClick={() => handleViewDoctor(doctor)}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <FaUser className="mr-2" />
                                    <span>View Profile</span>
                                    <svg 
                                        className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" 
                                        fill="none" 
                                        stroke="currentColor" 
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </motion.button>
                            </div>
                        </div>

                        {/* Hover Effect Decorations */}
                        <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-emerald-200 to-teal-200 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl"></div>
                        <div className="absolute bottom-4 left-4 w-8 h-8 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-lg"></div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default DoctorsCardCarousel;