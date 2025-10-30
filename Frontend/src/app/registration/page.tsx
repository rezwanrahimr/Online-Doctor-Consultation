"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DoctorRegistrationForm from "@/components/Register/DoctorRegistrationForm";
import PatientRegistrationForm from "@/components/Register/PatientRegistrationForm";

const roleRedirects = {
  doctor: "/doctor/dashboard",
  patient: "/patient/dashboard",
};

const RegistrationPage = () => {
  const [error, setError] = useState(null);
  const [role, setRole] = useState<"doctor" | "patient" | "">("");

  // Prevent body scroll when form is open
  useEffect(() => {
    if (role) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [role]);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-12 lg:py-16">
          <div className="flex flex-col lg:flex-row items-start justify-center gap-8 lg:gap-12 max-w-7xl mx-auto">
            
            {/* Left Side - Welcome Section */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-teal-100 to-cyan-100 text-teal-700 rounded-full text-sm font-semibold shadow-sm">
                  <span className="w-2 h-2 bg-teal-500 rounded-full animate-pulse"></span>
                  Join Our Healthcare Community
                </div>
                
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Start Your
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-emerald-600 to-cyan-600 mt-2">
                    Healthcare Journey
                  </span>
                </h1>
                
                <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                  Join thousands of healthcare professionals and patients who trust our platform for quality online medical consultations and care.
                </p>
              </div>
              
              {/* Feature Grid */}
              <div className="grid grid-cols-1 gap-4 mt-8">
                <div className="group flex items-center gap-4 p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-teal-100 hover:border-teal-300 hover:shadow-lg transition-all duration-300">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-teal-100 to-teal-200 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-7 h-7 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-base">Verified Professionals</h3>
                    <p className="text-sm text-gray-600">Certified & licensed doctors</p>
                  </div>
                </div>
                
                <div className="group flex items-center gap-4 p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-cyan-100 hover:border-cyan-300 hover:shadow-lg transition-all duration-300">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-cyan-100 to-cyan-200 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-7 h-7 text-cyan-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-base">Secure & Private</h3>
                    <p className="text-sm text-gray-600">Your health data is protected</p>
                  </div>
                </div>
                
                <div className="group flex items-center gap-4 p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-emerald-100 hover:border-emerald-300 hover:shadow-lg transition-all duration-300">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-7 h-7 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-base">24/7 Availability</h3>
                    <p className="text-sm text-gray-600">Round the clock healthcare</p>
                  </div>
                </div>

                <div className="group flex items-center gap-4 p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-teal-100 hover:border-teal-300 hover:shadow-lg transition-all duration-300">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-teal-100 to-cyan-200 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-7 h-7 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-base">Instant Booking</h3>
                    <p className="text-sm text-gray-600">Quick & easy appointments</p>
                  </div>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center gap-8 pt-6 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-2xl font-bold text-teal-600">10,000+</div>
                  <div className="text-sm text-gray-600">Happy Patients</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-600">200+</div>
                  <div className="text-sm text-gray-600">Expert Doctors</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-600">99.9%</div>
                  <div className="text-sm text-gray-600">Satisfaction</div>
                </div>
              </div>
            </div>

            {/* Right Side - Role Selection */}
            <div className="w-full lg:w-1/2 max-w-2xl">
              <div className="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden">
                
                {/* Header with Gradient */}
                <div className="relative bg-gradient-to-r from-teal-600 via-emerald-600 to-cyan-600 px-8 py-8">
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJ3aGl0ZSIgZmlsbC1vcGFjaXR5PSIwLjA1Ij48Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIyIi8+PC9nPjwvc3ZnPg==')] opacity-40"></div>
                  <div className="relative">
                    <h2 className="text-3xl lg:text-4xl font-bold text-white mb-2">Create Account</h2>
                    <p className="text-teal-50">Join our healthcare community today</p>
                  </div>
                </div>

                {/* Form Content */}
                <div className="px-6 py-8 sm:px-8 sm:py-10">

                  {/* Role Selection */}
                  <div className="mb-8">
                    <label className="block text-base font-semibold text-gray-800 mb-4">
                      I want to register as
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                      
                      {/* Patient Card */}
                      <button
                        type="button"
                        onClick={() => setRole("patient")}
                        className={`relative p-5 rounded-2xl border-2 transition-all duration-300 ${
                          role === "patient"
                            ? "border-teal-500 bg-gradient-to-br from-teal-50 to-cyan-50 shadow-lg shadow-teal-100"
                            : "border-gray-200 bg-white hover:border-teal-300 hover:bg-teal-50/30 hover:shadow-md"
                        }`}
                      >
                        <div className="flex flex-col items-center space-y-3">
                          <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                            role === "patient" 
                              ? "bg-gradient-to-br from-teal-500 to-cyan-500 shadow-lg shadow-teal-200" 
                              : "bg-gray-100"
                          }`}>
                            <svg className={`w-8 h-8 ${role === "patient" ? "text-white" : "text-gray-500"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                          </div>
                          <div className="text-center">
                            <h3 className={`font-bold text-base ${role === "patient" ? "text-teal-700" : "text-gray-700"}`}>
                              Patient
                            </h3>
                            <p className="text-xs text-gray-500 mt-1">Seek medical consultation</p>
                          </div>
                        </div>
                        {role === "patient" && (
                          <div className="absolute -top-2 -right-2">
                            <div className="bg-teal-500 text-white rounded-full p-1 shadow-lg">
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                          </div>
                        )}
                      </button>

                      {/* Doctor Card */}
                      <button
                        type="button"
                        onClick={() => setRole("doctor")}
                        className={`relative p-5 rounded-2xl border-2 transition-all duration-300 ${
                          role === "doctor"
                            ? "border-emerald-500 bg-gradient-to-br from-emerald-50 to-teal-50 shadow-lg shadow-emerald-100"
                            : "border-gray-200 bg-white hover:border-emerald-300 hover:bg-emerald-50/30 hover:shadow-md"
                        }`}
                      >
                        <div className="flex flex-col items-center space-y-3">
                          <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                            role === "doctor" 
                              ? "bg-gradient-to-br from-emerald-500 to-teal-500 shadow-lg shadow-emerald-200" 
                              : "bg-gray-100"
                          }`}>
                            <svg className={`w-8 h-8 ${role === "doctor" ? "text-white" : "text-gray-500"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                          </div>
                          <div className="text-center">
                            <h3 className={`font-bold text-base ${role === "doctor" ? "text-emerald-700" : "text-gray-700"}`}>
                              Doctor
                            </h3>
                            <p className="text-xs text-gray-500 mt-1">Provide healthcare services</p>
                          </div>
                        </div>
                        {role === "doctor" && (
                          <div className="absolute -top-2 -right-2">
                            <div className="bg-emerald-500 text-white rounded-full p-1 shadow-lg">
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                          </div>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Info Message */}
                  <div className="text-center py-8 bg-teal-50/50 rounded-xl border border-teal-100">
                    <svg className="w-16 h-16 mx-auto text-teal-600 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-gray-700 font-medium">Select your role to continue</p>
                    <p className="text-sm text-gray-500 mt-1">Choose the option that best describes you</p>
                  </div>
                </div>

                {/* Footer */}
                <div className="px-8 py-6 bg-gradient-to-r from-gray-50 to-teal-50/30 border-t border-gray-200">
                  <p className="text-center text-gray-600">
                    Already have an account?{" "}
                    <Link 
                      href="/login" 
                      className="font-semibold text-teal-600 hover:text-teal-700 transition-colors inline-flex items-center gap-1 group"
                    >
                      Sign in
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Stats */}
          <div className="mt-12 grid grid-cols-3 gap-4 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-gradient-to-br from-teal-50 to-white rounded-2xl border border-teal-100 shadow-sm">
              <div className="text-2xl lg:text-3xl font-bold text-teal-600">10K+</div>
              <div className="text-sm text-gray-600 mt-1">Happy Patients</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-emerald-50 to-white rounded-2xl border border-emerald-100 shadow-sm">
              <div className="text-2xl lg:text-3xl font-bold text-emerald-600">200+</div>
              <div className="text-sm text-gray-600 mt-1">Expert Doctors</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-cyan-50 to-white rounded-2xl border border-cyan-100 shadow-sm">
              <div className="text-2xl lg:text-3xl font-bold text-cyan-600">99.9%</div>
              <div className="text-sm text-gray-600 mt-1">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Full Page Registration Form Modal */}
      {role && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-white">
          <div className="min-h-screen">
            {/* Header */}
            <div className="sticky top-0 z-10 bg-gradient-to-r from-teal-600 via-emerald-600 to-cyan-600 shadow-lg">
              <div className="container mx-auto px-4 py-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      role === "patient" 
                        ? "bg-teal-500/20" 
                        : "bg-emerald-500/20"
                    }`}>
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {role === "patient" ? (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        ) : (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        )}
                      </svg>
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-white">
                        {role === "patient" ? "Patient" : "Doctor"} Registration
                      </h2>
                      <p className="text-teal-100 text-sm">Complete the form below to create your account</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setRole("")}
                    className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-xl transition-all duration-200 border border-white/20"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="hidden sm:inline">Close</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Form Content */}
            <div className="container mx-auto px-4 py-8 max-w-4xl">
              {error && (
                <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 rounded-r-lg text-sm">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    {error}
                  </div>
                </div>
              )}

              <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-6 sm:p-8">
                {role === "doctor" ? (
                  <DoctorRegistrationForm />
                ) : role === "patient" ? (
                  <PatientRegistrationForm />
                ) : null}
              </div>

              {/* Already have account link */}
              <div className="mt-8 text-center pb-8">
                <p className="text-gray-600">
                  Already have an account?{" "}
                  <Link 
                    href="/login" 
                    className="font-semibold text-teal-600 hover:text-teal-700 transition-colors inline-flex items-center gap-1 group"
                  >
                    Sign in
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default RegistrationPage;
