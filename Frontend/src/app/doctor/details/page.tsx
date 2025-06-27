"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

interface Doctor {
    _id: string;
    doctor_id: string;
    full_name: string;
    email: string;
    password: string;
    phone_number: string;
    date_of_birth: string;
    gender: string;
    profile_picture_url: string;
    bio: string;
    specialization: string;
    experience_years: number;
    qualifications: string;
    license_number: string;
    consultation_fee: number;
    availability: {
        day: string;
        time_slots: string[];
    }[];
    languages_spoken: string[];
    hospital_affiliations: {
        name: string;
        address: {
            street: string;
            city: string;
            state: string;
            postal_code: string;
            country: string;
        };
    }[];
    awards_and_recognitions: string[];
    address: {
        street: string;
        city: string;
        state: string;
        postal_code: string;
        country: string;
    };
    role: string;
    status: string;
    verification_status: string;
    identity_verified: boolean;
    terms_accepted: boolean;
    consent_form_signed: boolean;
    notifications_enabled: boolean;
    documents: {
        type: string;
        url: string;
    }[];
    approval: {
        status: string;
        reason?: string;
        reviewed_by: string;
        reviewed_at: string;
    };
    created_at: string;
    updated_at: string;
    appointments: {
        appointment_id: string;
        patient_id: string;
        date: string;
        status: string;
        prescription_url: string;
        notes: string;
    }[];
}

interface DoctorProps {
    doctor: Doctor;
}

const DoctorDetails = () => {
    const router = useRouter();
    const doctor = useSelector((state) => state.doctor.selected);

    if (!doctor) {
        return (
            <div className="flex items-center justify-center h-screen">
                <div className="text-3xl text-red-800 text-center">Loading...</div>
            </div>
        );
    }

    return (
        <>
            <Navbar />
            <div className="container mx-auto px-4 mb-4 mt-8">
                {/* Doctor Profile Header */}
                <div className="flex flex-col md:flex-row gap-8 mb-12">
                    {/* Doctor Image */}
                    <div className="w-full md:w-1/3 lg:w-1/4 flex justify-center">
                        <div className="relative w-64 h-64 rounded-lg overflow-hidden shadow-xl border-4 border-white">
                            {doctor.profile_picture_url ? (
                                <Image
                                    src={doctor.profile_picture_url}
                                    alt={doctor.full_name}
                                    fill
                                    className="object-cover"
                                />
                            ) : (
                                <div className="w-full h-full bg-gradient-to-br from-teal-100 to-cyan-200 flex items-center justify-center">
                                    <span className="text-2xl font-bold text-gray-700">
                                        {doctor.full_name.split(' ').map(n => n[0]).join('')}
                                    </span>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Doctor Info */}
                    <div className="w-full md:w-2/3 lg:w-3/4">
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                            {doctor.full_name.toUpperCase()}
                        </h1>
                        <h2 className="text-xl md:text-2xl font-semibold text-teal-600 mb-6">
                            {doctor.specialization}
                        </h2>

                        {/* Key Info */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                            <div>
                                <p className="text-gray-600 font-medium">License Number:</p>
                                <p className="text-gray-800">{doctor.license_number}</p>
                            </div>
                            <div>
                                <p className="text-gray-600 font-medium">Experience:</p>
                                <p className="text-gray-800">{doctor.experience_years} years</p>
                            </div>
                            <div>
                                <p className="text-gray-600 font-medium">Consultation Fee:</p>
                                <p className="text-gray-800">${doctor.consultation_fee}</p>
                            </div>
                            <div>
                                <p className="text-gray-600 font-medium">Languages:</p>
                                <p className="text-gray-800">{doctor.languages_spoken?.join(", ")}</p>
                            </div>
                        </div>

                        {/* Book Appointment Button */}
                        <div className="flex justify-start">
                            <Link href="/appointment">
                                <button className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-teal-700 hover:to-cyan-700 transition-all shadow-lg">
                                    BOOK APPOINTMENT
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Main Content Sections */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                    {/* Left Column */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* About Section */}
                        <div className="bg-white rounded-xl shadow-md p-6">
                            <h3 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-teal-500">
                                ABOUT
                            </h3>
                            <p className="text-gray-700 leading-relaxed">
                                {doctor.bio || "No biography available."}
                            </p>
                        </div>

                        {/* Training/Conference Section */}
                        <div className="bg-white rounded-xl shadow-md p-6">
                            <h3 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-teal-500">
                                TRAINING & CONFERENCES
                            </h3>
                            <ul className="space-y-4">
                                {doctor.awards_and_recognitions?.length > 0 ? (
                                    doctor.awards_and_recognitions.map((item, index) => (
                                        <li key={index} className="flex items-start">
                                            <span className="text-teal-600 mr-2">•</span>
                                            <span className="text-gray-700">{item}</span>
                                        </li>
                                    ))
                                ) : (
                                    <p className="text-gray-500">No training/conferences listed.</p>
                                )}
                            </ul>
                        </div>

                        {/* Research & Publications */}
                        <div className="bg-white rounded-xl shadow-md p-6">
                            <h3 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-teal-500">
                                RESEARCH & PUBLICATIONS
                            </h3>
                            <ul className="space-y-4">
                                {doctor.documents?.filter(doc => doc.type === "publication").length > 0 ? (
                                    doctor.documents
                                        .filter(doc => doc.type === "publication")
                                        .map((doc, index) => (
                                            <li key={index} className="flex items-start">
                                                <span className="text-teal-600 mr-2">•</span>
                                                <span className="text-gray-700">
                                                    <a 
                                                        href={doc.url} 
                                                        target="_blank" 
                                                        rel="noopener noreferrer"
                                                        className="hover:text-teal-600 hover:underline"
                                                    >
                                                        {doc.url.split('/').pop()}
                                                    </a>
                                                </span>
                                            </li>
                                        ))
                                ) : (
                                    <p className="text-gray-500">No publications listed.</p>
                                )}
                            </ul>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-8">
                        {/* Availability */}
                        <div className="bg-white rounded-xl shadow-md p-6">
                            <h3 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-teal-500">
                                AVAILABILITY
                            </h3>
                            <ul className="space-y-3">
                                {doctor.availability?.length > 0 ? (
                                    doctor.availability.map((slot, index) => (
                                        <li key={index} className="flex justify-between">
                                            <span className="font-medium text-gray-700">{slot.day}:</span>
                                            <span className="text-gray-600">{slot.time_slots.join(", ")}</span>
                                        </li>
                                    ))
                                ) : (
                                    <p className="text-gray-500">No availability listed.</p>
                                )}
                            </ul>
                        </div>

                        {/* Hospital Affiliations */}
                        <div className="bg-white rounded-xl shadow-md p-6">
                            <h3 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-teal-500">
                                HOSPITAL AFFILIATIONS
                            </h3>
                            <ul className="space-y-4">
                                {doctor.hospital_affiliations?.length > 0 ? (
                                    doctor.hospital_affiliations.map((hospital, index) => (
                                        <li key={index} className="flex items-start">
                                            <span className="text-teal-600 mr-2">•</span>
                                            <div>
                                                <p className="font-medium text-gray-700">{hospital.name}</p>
                                                <p className="text-sm text-gray-600">
                                                    {hospital.address.street}, {hospital.address.city}
                                                </p>
                                            </div>
                                        </li>
                                    ))
                                ) : (
                                    <p className="text-gray-500">No hospital affiliations listed.</p>
                                )}
                            </ul>
                        </div>

                        {/* Contact Information */}
                        <div className="bg-white rounded-xl shadow-md p-6">
                            <h3 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-teal-500">
                                CONTACT
                            </h3>
                            <div className="space-y-3">
                                <p className="flex items-center">
                                    <svg className="w-5 h-5 text-teal-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    <span className="text-gray-700">{doctor.phone_number}</span>
                                </p>
                                <p className="flex items-center">
                                    <svg className="w-5 h-5 text-teal-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <span className="text-gray-700">{doctor.email}</span>
                                </p>
                                {doctor.address && (
                                    <p className="flex items-start">
                                        <svg className="w-5 h-5 text-teal-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        <span className="text-gray-700">
                                            {doctor.address.street}, {doctor.address.city}, {doctor.address.state}, {doctor.address.country}
                                        </span>
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default DoctorDetails;