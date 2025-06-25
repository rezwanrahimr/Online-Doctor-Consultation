"use client"

import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import Logo from '../images/Logo (2).png';
import useisAuthenticated from '../hooks/useIsAuthenticated';
import useUserData from '../hooks/useUserData';
import { logout } from '@/redux/slices/userSlice';

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const isAuth = useisAuthenticated();
    const userData = useUserData();
    const dispatch = useDispatch();

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

    const handleLogout = () => {
        dispatch(logout());
        window.location.href = '/login';
    };

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
    };

    const renderDesktopLinks = () =>
        navigation.map((item) => (
            <Link
                key={item.name}
                href={item.href}
                className="relative text-base font-medium text-gray-700 hover:text-teal-600 transition-all duration-300 ease-in-out px-4 py-2 rounded-lg hover:bg-teal-50 group"
            >
                {item.name}
                <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-teal-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
            </Link>
        ));

    const renderMobileLinks = () =>
        navigation.map((item) => (
            <Link
                key={item.name}
                href={item.href}
                onClick={closeMobileMenu}
                className="block text-lg font-medium text-gray-700 hover:text-teal-600 hover:bg-teal-50 transition-all duration-200 py-4 px-4 rounded-lg border-b border-gray-100 last:border-b-0"
            >
                {item.name}
            </Link>
        ));

    return (
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
            <nav className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo Section */}
                    <div className="flex items-center flex-shrink-0">
                        <Link href="/" className="flex items-center">
                            <Image 
                                src={Logo} 
                                alt="Daktar Logo" 
                                height={48} 
                                width={164} 
                                className="h-12 w-auto" 
                                priority 
                            />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex lg:items-center lg:justify-center flex-1 max-w-2xl mx-8">
                        <div className="flex items-center space-x-2">
                            {renderDesktopLinks()}
                        </div>
                    </div>

                    {/* Desktop Authentication Buttons */}
                    <div className="hidden lg:flex lg:items-center lg:space-x-4">
                        {isAuth ? (
                            <button
                                onClick={handleLogout}
                                className="inline-flex items-center justify-center rounded-xl bg-teal-600 hover:bg-teal-700 py-3 px-6 font-medium text-white transition-all duration-200 ease-in-out hover:scale-[1.02] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 min-w-[100px]"
                            >
                                Logout
                            </button>
                        ) : (
                            <div className="flex items-center space-x-3">
                                <Link href="/login">
                                    <button className="inline-flex items-center justify-center rounded-xl border-2 border-teal-600 bg-transparent hover:bg-teal-50 py-3 px-6 font-medium text-teal-600 transition-all duration-200 ease-in-out hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 min-w-[100px]">
                                        Login
                                    </button>
                                </Link>
                                <Link href="/registration">
                                    <button className="inline-flex items-center justify-center rounded-xl bg-teal-600 hover:bg-teal-700 py-3 px-6 font-medium text-white transition-all duration-200 ease-in-out hover:scale-[1.02] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 min-w-[100px]">
                                        Register
                                    </button>
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden">
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="inline-flex items-center justify-center rounded-xl p-3 text-gray-600 hover:text-teal-600 hover:bg-teal-50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {mobileMenuOpen ? (
                                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                            ) : (
                                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                            )}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <div className="lg:hidden">
                    {/* Backdrop */}
                    <div 
                        className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 transition-opacity duration-300"
                        onClick={closeMobileMenu}
                    ></div>
                    
                    {/* Mobile Menu Panel */}
                    <div className="relative z-50 bg-white/95 backdrop-blur-md border-t border-gray-100 shadow-xl">
                        <div className="px-6 py-8">
                            {/* Mobile Navigation Links */}
                            <div className="mb-8 space-y-2">
                                {renderMobileLinks()}
                            </div>

                            {/* Mobile Authentication Buttons */}
                            <div className="space-y-4">
                                {isAuth ? (
                                    <button
                                        onClick={() => {
                                            handleLogout();
                                            closeMobileMenu();
                                        }}
                                        className="w-full inline-flex items-center justify-center rounded-xl bg-teal-600 hover:bg-teal-700 py-4 px-6 font-medium text-white transition-all duration-200 ease-in-out hover:scale-[1.02] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                                    >
                                        Logout
                                    </button>
                                ) : (
                                    <div className="space-y-4">
                                        <Link href="/login" onClick={closeMobileMenu}>
                                            <button className="w-full inline-flex items-center justify-center rounded-xl border-2 border-teal-600 bg-transparent hover:bg-teal-50 py-4 px-6 font-medium text-teal-600 transition-all duration-200 ease-in-out hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
                                                Login
                                            </button>
                                        </Link>
                                        <Link href="/registration" onClick={closeMobileMenu}>
                                            <button className="w-full inline-flex items-center justify-center rounded-xl bg-teal-600 hover:bg-teal-700 py-4 px-6 font-medium text-white transition-all duration-200 ease-in-out hover:scale-[1.02] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
                                                Register
                                            </button>
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;