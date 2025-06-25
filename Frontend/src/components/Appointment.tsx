"use client";

import { Formik, Field, Form, ErrorMessage, useFormikContext } from "formik";
import * as Yup from "yup";
import DoctorImg from "../images/appoinment_img.png";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
import { authHeader } from "@/utils";
import Swal from "sweetalert2";
import useisAuthenticated from "@/hooks/useIsAuthenticated";
import { motion } from 'framer-motion';

const days = [
    { id: 0, value: "Select Day" },
    { id: 1, value: "Saturday" },
    { id: 2, value: "Sunday" },
    { id: 3, value: "Monday" },
    { id: 4, value: "Tuesday" },
    { id: 5, value: "Wednesday" },
    { id: 6, value: "Thursday" },
    { id: 7, value: "Friday" },
];

const consultation_type = [
    { id: "", value: "Select Type" },
    { id: "1", value: "Video" },
];

const Appointment = () => {
    const [doctors, setDoctors] = useState([]);
    const isAuthenticated = useisAuthenticated();

    useEffect(() => {
        const fetchDoctors = async () => {
            try {
                const response = await axios.get(
                    `${process.env.NEXT_PUBLIC_API_URL}/api/public/doctor/all`,
                    {
                        headers: authHeader(),
                    }
                );
                setDoctors(response.data);
            } catch (err) {
                console.error("Error fetching doctors:", err);
            }
        };
        fetchDoctors();
    }, []);

    const validationSchema = Yup.object({
        doctor: Yup.string().required("Doctor is required"),
        day: Yup.string().required("Day is required"),
        timeSlot: Yup.string().required("Time slot is required"),
        consultation_type: Yup.string().required("Consultation type is required"),
        appointment_date: Yup.date().required("Appointment date is required"),
        reason: Yup.string().required("Reason is required"),
    });

    const FormFields = ({ doctors, availableTimeSlot }) => {
        const { values, setFieldValue } = useFormikContext();

        if (values.doctor && !isAuthenticated) {
            Swal.fire({
                title: "Please Login or SignUp!",
                text: "Please Login or SignUp then you can take Appointment !",
                icon: "info"
            });
            return;
        }

        useEffect(() => {
            const selectedDoctor = doctors.find(
                (doc) => doc._id === values.doctor
            );
            if (selectedDoctor?.availability) {
                const timeSlots = selectedDoctor.availability
                    .filter((item) => item.day === values.day)
                    .flatMap((item) =>
                        item.time_slots.map((slot, index) => ({
                            id: index,
                            value: slot,
                        }))
                    );
                setFieldValue("availableTimeSlot", timeSlots);
            } else {
                setFieldValue("availableTimeSlot", []);
            }
        }, [values.doctor, values.day, doctors, setFieldValue]);

        const InputField = ({ name, as = "select", children, ...props }) => (
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="relative"
            >
                <Field
                    as={as}
                    name={name}
                    className="block w-full rounded-2xl bg-white/95 backdrop-blur-sm py-4 px-6 text-slate-700 placeholder-slate-400 shadow-lg border border-white/20 focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all duration-300 hover:shadow-xl"
                    {...props}
                >
                    {children}
                </Field>
                <ErrorMessage name={name} component="div" className="text-red-100 text-sm mt-2 ml-2" />
            </motion.div>
        );

        return (
            <div className="space-y-6">
                <InputField name="doctor">
                    <option value="">Select Doctor</option>
                    {doctors.map((doc) => (
                        <option key={doc._id} value={doc._id}>
                            {doc.full_name}
                        </option>
                    ))}
                </InputField>

                <InputField name="day">
                    {days.map((day) => (
                        <option key={day.id} value={day.value}>
                            {day.value}
                        </option>
                    ))}
                </InputField>

                {values.availableTimeSlot?.length > 0 && (
                    <InputField name="timeSlot">
                        <option value="">Select Time Slot</option>
                        {values.availableTimeSlot.map((slot) => (
                            <option key={slot.id} value={slot.value}>
                                {slot.value}
                            </option>
                        ))}
                    </InputField>
                )}

                <InputField name="consultation_type">
                    {consultation_type.map((type) => (
                        <option key={type.id} value={type.value}>
                            {type.value}
                        </option>
                    ))}
                </InputField>

                <InputField 
                    name="appointment_date" 
                    as="input" 
                    type="date"
                    min={new Date().toISOString().split('T')[0]}
                />

                <InputField 
                    name="reason" 
                    as="textarea" 
                    placeholder="Reason for visit"
                    rows={4}
                    style={{ borderRadius: '1rem' }}
                />
            </div>
        );
    };

    return (
        <section className="relative py-16 sm:py-20 lg:py-24 xl:py-28 overflow-hidden">
            {/* Background with Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600"></div>
            <div className="absolute inset-0 bg-[url('../images/appointment_bg.jpg')] bg-cover bg-center opacity-20"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/40 to-teal-900/40"></div>
            
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDEwIDAgTCAwIDAgMCAxMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl animate-pulse delay-1000"></div>

            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
                <div className="flex flex-col xl:flex-row items-center justify-between gap-12 lg:gap-16 xl:gap-20">
                    
                    {/* Form Section */}
                    <motion.div 
                        className="w-full xl:w-1/2 order-2 xl:order-1"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Header */}
                        <motion.div 
                            className="text-center xl:text-left mb-8"
                            initial={{ opacity: 0, y: -30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <div className="inline-flex items-center py-2 px-4 mb-6 text-sm font-semibold text-emerald-100 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full">
                                <span className="text-emerald-200 mr-2">●</span>
                                Book Appointment
                            </div>

                            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-4xl 2xl:text-5xl font-bold text-white leading-tight mb-4">
                                Schedule Your
                                <span className="block bg-gradient-to-r from-white to-emerald-100 bg-clip-text text-transparent">
                                    Consultation
                                </span>
                            </h2>

                            <p className="text-lg text-emerald-100 leading-relaxed max-w-xl mx-auto xl:mx-0">
                                Book your appointment with our expert medical professionals. Quick, easy, and secure booking process.
                            </p>
                        </motion.div>

                        {/* Form */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/20"
                        >
                            <Formik
                                initialValues={{
                                    doctor: "",
                                    day: "",
                                    timeSlot: "",
                                    consultation_type: "",
                                    reason: "",
                                    availableTimeSlot: [],
                                    time_slot: "",
                                    appointment_date: ""
                                }}
                                validationSchema={validationSchema}
                                onSubmit={async (values, { resetForm, setSubmitting }) => {
                                    try {
                                        setSubmitting(true);

                                        const payload = {
                                            doctor_id: values.doctor,
                                            consultation_type: values.consultation_type,
                                            appointment_date: values.appointment_date,
                                            time_slot: values.timeSlot,
                                            status: "Pending",
                                            reason_for_visit: values.reason,
                                            booking_fee: doctors.find(item => item._id === values.doctor)?.consultation_fee || 0,
                                            payment_status: "Paid"
                                        };

                                        const response = await axios.post(
                                            `${process.env.NEXT_PUBLIC_API_URL}/api/users/patient/appointments`,
                                            payload,
                                            { headers: authHeader() }
                                        );

                                        Swal.fire({
                                            title: "Success!",
                                            text: "Your appointment has been booked successfully!",
                                            icon: "success",
                                            confirmButtonColor: "#10b981"
                                        });
                                        resetForm();
                                    } catch (error) {
                                        console.error("Error submitting appointment:", error);
                                        Swal.fire({
                                            title: "Error!",
                                            text: "There was an error booking your appointment. Please try again.",
                                            icon: "error",
                                            confirmButtonColor: "#ef4444"
                                        });
                                    } finally {
                                        setSubmitting(false);
                                    }
                                }}
                            >
                                {({ isSubmitting, values }) => (
                                    <Form className="space-y-6">
                                        <FormFields doctors={doctors} availableTimeSlot={values.availableTimeSlot} />
                                        
                                        <motion.div 
                                            className="pt-4"
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            <button
                                                type="submit"
                                                disabled={isSubmitting}
                                                className="w-full group inline-flex items-center justify-center rounded-2xl bg-white hover:bg-gray-50 text-emerald-600 font-bold text-lg px-8 py-4 transition-all duration-300 ease-in-out shadow-xl hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-white/30 disabled:opacity-50 disabled:cursor-not-allowed"
                                            >
                                                {isSubmitting ? (
                                                    <>
                                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-emerald-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                        </svg>
                                                        Booking...
                                                    </>
                                                ) : (
                                                    <>
                                                        <span className="mr-3">Book Appointment</span>
                                                        <svg 
                                                            className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" 
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
                                                    </>
                                                )}
                                            </button>
                                        </motion.div>
                                    </Form>
                                )}
                            </Formik>
                        </motion.div>
                    </motion.div>

                    {/* Image Section */}
                    <motion.div 
                        className="w-full xl:w-1/2 order-1 xl:order-2"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="relative flex justify-center xl:justify-end">
                            {/* Decorative Elements */}
                            <div className="absolute -top-8 -right-8 w-32 h-32 bg-white/20 rounded-full blur-2xl"></div>
                            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-white/20 rounded-full blur-2xl"></div>
                            
                            {/* Doctor Image */}
                            <div className="relative z-10 max-w-md lg:max-w-lg xl:max-w-md 2xl:max-w-lg">
                                <div className="relative">
                                    <Image
                                        src={DoctorImg}
                                        alt="Professional Medical Doctor"
                                        className="w-full h-auto drop-shadow-2xl"
                                        priority
                                    />
                                    
                                    {/* Floating Stats Cards */}
                                    <motion.div 
                                        className="absolute top-12 -left-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-white/20"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.6, delay: 0.8 }}
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                                                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <p className="font-bold text-slate-900">24/7</p>
                                                <p className="text-sm text-slate-600">Available</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                    
                                    <motion.div 
                                        className="absolute bottom-16 -right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-white/20"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.6, delay: 1 }}
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                                                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <p className="font-bold text-slate-900">99%</p>
                                                <p className="text-sm text-slate-600">Success Rate</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Appointment;