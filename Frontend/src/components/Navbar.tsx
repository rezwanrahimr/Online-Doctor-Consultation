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
        { name: 'HOME', href: '/' },
        { name: 'ABOUT', href: '/about' },
        { name: 'SERVICES', href: '/services' },
        { name: 'DOCTORS', href: '/doctor' },
        { name: 'APPOINTMENT', href: '/appointment' },
        { name: 'CONTACT', href: '/contact' },
    ];

    if (isAuth) {
        navigation.push({
            name: 'DASHBOARD',
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
                className="text-sm xl:text-lg font-semibold leading-6 text-gray-900 hover:text-gray-600 transition-colors duration-200 whitespace-nowrap"
            >
                {item.name}
            </Link>
        ));

    const renderMobileLinks = () =>
        navigation.map((item) => (
            <Link
                key={item.name}
                href={item.href}
                onClick={closeMobileMenu}
                className="block text-lg font-semibold leading-6 text-gray-900 hover:text-gray-600 transition-colors duration-200 py-2 border-b border-gray-100 last:border-b-0"
            >
                {item.name}
            </Link>
        ));

    return (
        <header className="sticky top-0 z-50 bg-white shadow-md">
            <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo Section */}
                    <div className="flex items-center flex-shrink-0">
                        <Link href="/" className="flex items-center">
                            <Image 
                                src={Logo} 
                                alt="Logo" 
                                height={40} 
                                width={137} 
                                className="h-8 w-auto sm:h-10 md:h-12" 
                                priority 
                            />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex lg:items-center lg:space-x-4 xl:space-x-8">
                        {renderDesktopLinks()}
                    </div>

                    {/* Desktop Authentication Buttons */}
                    <div className="hidden lg:flex lg:items-center lg:space-x-4">
                        {isAuth ? (
                            <button
                                onClick={handleLogout}
                                className="inline-flex items-center justify-center rounded-xl bg-color-primary py-2 px-4 xl:py-3 xl:px-6 font-dm text-sm xl:text-base font-medium text-white transition-all duration-200 ease-in-out hover:scale-[1.02] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            >
                                LOGOUT
                            </button>
                        ) : (
                            <div className="flex items-center space-x-3">
                                <Link href="/login">
                                    <button className="inline-flex items-center justify-center rounded-xl bg-color-primary py-2 px-4 xl:py-3 xl:px-6 font-dm text-sm xl:text-base font-medium text-white transition-all duration-200 ease-in-out hover:scale-[1.02] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                        LOGIN
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
                            className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
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
                        className="fixed inset-0 bg-black bg-opacity-25 z-40"
                        onClick={closeMobileMenu}
                    ></div>
                    
                    {/* Mobile Menu Panel */}
                    <div className="relative z-50 bg-white border-t border-gray-200 shadow-lg">
                        <div className="px-4 py-6 sm:px-6">
                            {/* Mobile Navigation Links */}
                            <div className="mb-6">
                                {renderMobileLinks()}
                            </div>

                            {/* Mobile Authentication Buttons */}
                            <div className="space-y-3">
                                {isAuth ? (
                                    <button
                                        onClick={() => {
                                            handleLogout();
                                            closeMobileMenu();
                                        }}
                                        className="w-full inline-flex items-center justify-center rounded-xl bg-color-primary py-3 px-6 font-dm text-base font-medium text-white transition-all duration-200 ease-in-out hover:scale-[1.02] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                    >
                                        LOGOUT
                                    </button>
                                ) : (
                                    <div className="space-y-3">
                                        <Link href="/login" onClick={closeMobileMenu}>
                                            <button className="w-full inline-flex items-center justify-center rounded-xl bg-color-secondary py-3 px-6 font-dm text-base font-medium text-white transition-all duration-200 ease-in-out hover:scale-[1.02] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                                LOGIN
                                            </button>
                                        </Link>
                                        <Link href="/registration" onClick={closeMobileMenu}>
                                            <button className="w-full inline-flex items-center justify-center rounded-xl bg-color-primary py-3 px-6 font-dm text-base font-medium text-white transition-all duration-200 ease-in-out hover:scale-[1.02] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                                REGISTER
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