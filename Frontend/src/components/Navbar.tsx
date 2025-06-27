"use client"

import { useState, useEffect } from 'react';
import { Bars3Icon, XMarkIcon, BellIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../images/Logo (2).png';

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [noticeIndex, setNoticeIndex] = useState(0);
    const [isAuth, setIsAuth] = useState(false); // Replace with your auth hook
    const [userData, setUserData] = useState(null); // Replace with your user data hook

    // Notice data - replace with your actual notices
    const notices = [
        "🩺 New Telehealth Services Available - Book Your Virtual Consultation Today!",
        "📅 Weekend Emergency Services Now Open - 24/7 Medical Support",
        "💊 Prescription Refill Service - Get Your Medications Delivered",
        "🏥 New Cardiology Department Opening - Expert Heart Care Available",
        "🎯 Health Checkup Packages - Complete Medical Screening at 30% Off"
    ];

    const navigation = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Services', href: '/services' },
        { name: 'Doctors', href: '/doctor' },
        { name: 'Appointment', href: '/appointment' },
        { name: 'Contact', href: '/contact' },
    ];

    if (isAuth) {
        navigation.push({
            name: 'Dashboard',
            href:
                userData?.role === 'doctor'
                    ? '/doctor/dashboard'
                    : userData?.role === 'patient'
                        ? '/patient/dashboard'
                        : '/admin/dashboard',
        });
    }

    // Auto-scroll notices
    useEffect(() => {
        const timer = setInterval(() => {
            setNoticeIndex((prev) => (prev + 1) % notices.length);
        }, 4000);
        return () => clearInterval(timer);
    }, [notices.length]);

    const handleLogout = () => {
        // dispatch(logout());
        window.location.href = '/login';
    };

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
    };

    const renderDesktopLinks = () =>
        navigation.map((item, index) => (
            <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
            >
                <Link
                    href={item.href}
                    className="relative group px-4 py-2 text-sm font-semibold text-gray-700 hover:text-teal-600 transition-all duration-300 ease-in-out rounded-lg hover:bg-teal-50/80"
                >
                    {item.name}
                    <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-teal-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out rounded-full"></span>
                </Link>
            </motion.div>
        ));

    const renderMobileLinks = () =>
        navigation.map((item, index) => (
            <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
            >
                <Link
                    href={item.href}
                    onClick={closeMobileMenu}
                    className="group flex items-center justify-between text-lg font-semibold text-gray-700 hover:text-teal-600 hover:bg-gradient-to-r hover:from-teal-50 hover:to-cyan-50 transition-all duration-300 py-4 px-6 rounded-xl border-b border-gray-100 last:border-b-0"
                >
                    <span>{item.name}</span>
                    <ChevronRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
            </motion.div>
        ));

    return (
        <>
            {/* Notice Bar */}
          <div className="bg-gradient-to-r from-teal-600 via-emerald-600 to-cyan-600 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIwLjUiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-10"></div>
                
                <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="flex items-center justify-between py-3">
  <div className="flex items-center min-w-0 flex-1">
    <div className="flex-shrink-0 mr-3">
      <BellIcon className="w-5 h-5 text-white animate-pulse" />
    </div>
    
    <div className="min-w-0 flex-1 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={noticeIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="text-sm sm:text-base font-medium truncate"
        >
          {notices[noticeIndex]}
        </motion.div>
      </AnimatePresence>
    </div>
  </div>

  <div className="ml-4 flex-shrink-0 flex items-center space-x-4">
    {/* Notice Navigation Dots */}
    <div className="hidden sm:flex space-x-2">
      {notices.map((_, index) => (
        <button
          key={index}
          onClick={() => setNoticeIndex(index)}
          className={`w-2 h-2 rounded-full transition-all duration-300 ${
            noticeIndex === index 
              ? 'bg-white shadow-lg' 
              : 'bg-white/40 hover:bg-white/60'
          }`}
        />
      ))}
    </div>

    {/* View All Button */}
    <Link href="/notices">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="hidden sm:flex items-center space-x-1 bg-white/20 hover:bg-white/30 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200"
      >
        <span>View All</span>
        <ChevronRightIcon className="w-3 h-3" />
      </motion.button>
    </Link>
  </div>
</div>
                </div>
            </div>

            {/* Main Navbar */}
            <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-gray-100/80 shadow-lg">
             <nav className="mx-auto container px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo Section */}
                        <motion.div 
                            className="flex items-center flex-shrink-0"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Link href="/" className="flex items-center group">  
                            <Image 
                                src={Logo} 
                                alt="Daktar Logo" 
                                height={48} 
                                width={164} 
                                className="h-12 w-auto" 
                                priority 
                            />
                        </Link>
                        </motion.div>

                        {/* Desktop Navigation - Centered */}
                        <div className="hidden lg:flex lg:items-center lg:justify-center flex-1 max-w-4xl mx-8">
                            <div className="flex items-center space-x-1 bg-gray-50/80 backdrop-blur-sm rounded-2xl p-2 border border-gray-200/60">
                                {renderDesktopLinks()}
                            </div>
                        </div>

                        {/* Desktop Authentication Buttons */}
                        <motion.div 
                            className="hidden lg:flex lg:items-center lg:space-x-3 flex-shrink-0"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            {isAuth ? (
                                <motion.button
                                    onClick={handleLogout}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="relative inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 py-3 px-6 font-semibold text-white transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 min-w-[100px] overflow-hidden group"
                                >
                                    <span className="relative z-10">Logout</span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                                </motion.button>
                            ) : (
                                <div className="flex items-center space-x-3">
                                    <Link href="/login">
                                        <motion.button 
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="relative inline-flex items-center justify-center rounded-xl border-2 border-teal-600 bg-transparent hover:bg-teal-50 py-3 px-6 font-semibold text-teal-600 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 min-w-[100px] overflow-hidden group"
                                        >
                                            <span className="relative z-10">Login</span>
                                            <div className="absolute inset-0 bg-teal-50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                                        </motion.button>
                                    </Link>
                                    <Link href="/registration">
                                        <motion.button 
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="relative inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 py-3 px-6 font-semibold text-white transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 min-w-[100px] overflow-hidden group"
                                        >
                                            <span className="relative z-10">Register</span>
                                            <div className="absolute inset-0 bg-gradient-to-r from-teal-700 to-cyan-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                                        </motion.button>
                                    </Link>
                                </div>
                            )}
                        </motion.div>

                        {/* Mobile Menu Button */}
                        <div className="lg:hidden">
                            <motion.button
                                type="button"
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-flex items-center justify-center rounded-xl p-3 text-gray-600 hover:text-teal-600 hover:bg-teal-50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500 border border-gray-200 bg-white/80 backdrop-blur-sm"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>
                                <AnimatePresence mode="wait">
                                    {mobileMenuOpen ? (
                                        <motion.div
                                            key="close"
                                            initial={{ rotate: -90, opacity: 0 }}
                                            animate={{ rotate: 0, opacity: 1 }}
                                            exit={{ rotate: 90, opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="menu"
                                            initial={{ rotate: 90, opacity: 0 }}
                                            animate={{ rotate: 0, opacity: 1 }}
                                            exit={{ rotate: -90, opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.button>
                        </div>
                    </div>
                </nav>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <>
                            {/* Backdrop */}
                            <motion.div 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="lg:hidden fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
                                onClick={closeMobileMenu}
                            />
                            
                            {/* Mobile Menu Panel */}
                            <motion.div 
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                                className="lg:hidden relative z-50 bg-white/95 backdrop-blur-xl border-t border-gray-100 shadow-2xl"
                            >
                                <div className="px-6 py-8">
                                    {/* Mobile Navigation Links */}
                                    <div className="mb-8 space-y-2">
                                        {renderMobileLinks()}
                                    </div>

                                    {/* Mobile Authentication Buttons */}
                                    <div className="space-y-4">
                                        {isAuth ? (
                                            <motion.button
                                                onClick={() => {
                                                    handleLogout();
                                                    closeMobileMenu();
                                                }}
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                                className="w-full inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 py-4 px-6 font-semibold text-white transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                                            >
                                                Logout
                                            </motion.button>
                                        ) : (
                                            <div className="space-y-4">
                                                <Link href="/login" onClick={closeMobileMenu}>
                                                    <motion.button 
                                                        whileHover={{ scale: 1.02 }}
                                                        whileTap={{ scale: 0.98 }}
                                                        className="w-full inline-flex items-center justify-center rounded-xl border-2 border-teal-600 bg-transparent hover:bg-teal-50 py-4 px-6 font-semibold text-teal-600 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                                                    >
                                                        Login
                                                    </motion.button>
                                                </Link>
                                                <Link href="/registration" onClick={closeMobileMenu}>
                                                    <motion.button 
                                                        whileHover={{ scale: 1.02 }}
                                                        whileTap={{ scale: 0.98 }}
                                                        className="w-full inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 py-4 px-6 font-semibold text-white transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                                                    >
                                                        Register
                                                    </motion.button>
                                                </Link>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>
            </header>
        </>
    );
};

export default Navbar;