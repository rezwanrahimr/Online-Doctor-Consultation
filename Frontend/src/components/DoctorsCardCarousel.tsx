'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
// import axios from 'axios'; // Remove axios import for demo
import { authHeader } from '@/utils';
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
        // Simulate loading and set sample data for demo
        const fetchDoctors = async () => {
            setLoading(true);
            // Simulate API delay
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            // Sample doctor data for demonstration
            const sampleDoctors = [
                {
                    _id: '1',
                    full_name: 'Dr. Sarah Johnson',
                    specialization: 'Cardiology',
                    designation: 'Chief Cardiologist',
                    experience_years: 15,
                    profile_picture_url: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face'
                },
                {
                    _id: '2',
                    full_name: 'Dr. Michael Chen',
                    specialization: 'Neurology',
                    designation: 'Senior Neurologist',
                    experience_years: 12,
                    profile_picture_url: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop&crop=face'
                },
                {
                    _id: '3',
                    full_name: 'Dr. Emily Rodriguez',
                    specialization: 'Pediatrics',
                    designation: 'Pediatric Specialist',
                    experience_years: 8,
                    profile_picture_url: 'https://images.unsplash.com/photo-1594824596441-cf30db2c5ac5?w=400&h=400&fit=crop&crop=face'
                },
                {
                    _id: '4',
                    full_name: 'Dr. James Wilson',
                    specialization: 'Orthopedics',
                    designation: 'Orthopedic Surgeon',
                    experience_years: 20,
                    profile_picture_url: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face'
                },
                {
                    _id: '5',
                    full_name: 'Dr. Priya Patel',
                    specialization: 'Dermatology',
                    designation: 'Consultant Dermatologist',
                    experience_years: 10,
                    profile_picture_url: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop&crop=face'
                },
                {
                    _id: '6',
                    full_name: 'Dr. Robert Anderson',
                    specialization: 'Gastroenterology',
                    designation: 'GI Specialist',
                    experience_years: 14,
                    profile_picture_url: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop&crop=face'
                }
            ];
            
            setDoctors(sampleDoctors);
            setLoading(false);
        };

        fetchDoctors();
    }, []);

    const handleCardClick = (doctor) => {
        dispatch(selectedDoctor(doctor));
        console.log('Navigating to doctor details:', doctor.full_name);
        router.push('/doctor/details');
    };

    // Loading skeleton
    if (loading) {
        return (
            <div className="container mx-auto px-4 py-8">
                <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {[...Array(8)].map((_, index) => (
                        <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden animate-pulse">
                            <div className="aspect-[4/3] bg-gray-200"></div>
                            <div className="p-6 space-y-4">
                                <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                                <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8">
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {doctors.map((doctor, index) => (
          <motion.div
            key={doctor?._id}
            className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border border-gray-100 hover:border-teal-200"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ 
              y: -8,
              transition: { duration: 0.3 }
            }}
            onClick={() => handleCardClick(doctor)}
          >
            {/* Doctor Image Section - Updated Gradient */}
            <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-teal-50 to-cyan-100">
              <Image
                src={doctor.profile_picture_url || '/images/user.png'}
                alt={doctor.full_name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Online Status Badge - Updated to teal */}
              <div className="absolute top-4 right-4 bg-teal-500 w-3 h-3 rounded-full border-2 border-white shadow-lg animate-pulse"></div>
              
              {/* Specialization Badge - Updated Colors */}
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-teal-600 border border-teal-100 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                {doctor.specialization}
              </div>
            </div>

            {/* Doctor Info Section */}
            <div className="p-6">
              {/* Doctor Name - Updated hover color */}
              <motion.h3 
                className="text-xl font-bold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors duration-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {doctor.full_name}
              </motion.h3>

              {/* Department - Updated dot color */}
              <motion.div 
                className="flex items-center mb-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                <span className="text-gray-600 font-medium text-sm">
                  Department of {doctor.specialization}
                </span>
              </motion.div>

              {/* Designation - Updated to emerald to match navbar */}
              <motion.div 
                className="flex items-center mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                <span className="text-gray-700 font-semibold text-sm">
                  {doctor.designation || 'Consultant Physician'}
                </span>
              </motion.div>

              {/* Bottom Section */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                {/* Experience - Updated colors */}
                <div className="flex items-center">
                  <div className="bg-teal-50 p-2 rounded-lg mr-3">
                    <svg className="w-4 h-4 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Experience</div>
                    <div className="text-sm font-semibold text-gray-900">{doctor.experience_years} Years</div>
                  </div>
                </div>

                {/* View Profile Arrow - Updated colors */}
                <div className="bg-teal-50 group-hover:bg-teal-100 p-2 rounded-full transition-colors duration-300">
                  <svg 
                    className="w-5 h-5 text-teal-600 group-hover:translate-x-1 transition-transform duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Subtle Hover Effect Decorations - Updated to teal gradient */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </motion.div>
        ))}
      </div>
    </div>
    );
};

export default DoctorsCardCarousel;