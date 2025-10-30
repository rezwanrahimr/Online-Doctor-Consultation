"use client";
import { useState } from 'react';
import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
import { login } from '@/redux/slices/userSlice';
import { useRouter } from 'next/navigation';

const baseURl = process.env.NEXT_PUBLIC_API_URL;

// Define the structure of social links
interface SocialLinks {
    twitter: string;
    linkedin: string;
}

// Define the structure of the form data
interface FormData {
    full_name: string;
    email: string;
    password: string;
    phone_number: string;
    date_of_birth: string;
    gender: string;
    bio: string;
    address: string;
    street: string;
    city: string;
    state: string;
    postal_code: string;
    country: string;
    specialization: string;
    qualifications: string[];
    experience_years: string;
    license_number: string;
    consultation_fee: string;
    availability: { day: string; time_slots: string }[];
    languages_spoken: string[];
    hospital_affiliations: { name: string; address: { street: string; city: string; state: string; postal_code: string; country: string } }[];
    awards_and_recognitions: string[];
    consent_form_signed: boolean;
    terms_accepted: boolean;
    social_links: SocialLinks;
}



const DoctorRegistrationForm = () => {
    // Initialize form data state
    const [formData, setFormData] = useState<FormData>({
        full_name: '',
        email: '',
        password: '',
        phone_number: '',
        date_of_birth: '',
        gender: '',
        bio: '',
        address: '',
        street: '',
        city: '',
        state: '',
        postal_code: '',
        country: '',
        specialization: '',
        experience_years: '',
        license_number: '',
        consultation_fee: '',
        social_links: {
            twitter: '',
            linkedin: ''
        },
        consent_form_signed: false,
        terms_accepted: false,

        qualifications: [],
        availability: [],
        languages_spoken: [],
        hospital_affiliations: [],
        awards_and_recognitions: [],
    });

    const [qualification, setQualification] = useState<string>('');
    const [dAvailability, setDAvailability] = useState<{ day: string; time_slots: string }[]>([{ day: '', time_slots: '' }]);
    const [languagesSpoken, setLanguagesSpoken] = useState<string[]>(['']);
    const [hospitalAffiliations, setHospitalAffiliations] = useState<{ name: string; address: { street: string; city: string; state: string; postal_code: string; country: string } }[]>([{ name: '', address: { street: '', city: '', state: '', postal_code: '', country: '' } }]);
    const [awardsAndRecognitions, setAwardsAndRecognitions] = useState<string[]>(['']);
    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const dispatch = useDispatch();
    const router = useRouter();
    
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    // Handle form input changes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type, checked } = e.target as HTMLInputElement;
        if (type === 'checkbox') {
            setFormData({ ...formData, [name]: checked });
        } else if (name.includes('social_links')) {
            const socialName = name.split('.')[1];
            setFormData({ ...formData, social_links: { ...formData.social_links, [socialName]: value } });
        } else {
            setFormData({ ...formData, [name]: value });
        }
        setErrors({ ...errors, [name]: '' });
    };

    const validateForm = () => {
        const newErrors: { [key: string]: string } = {};
        for (const key in formData) {
            if (typeof formData[key as keyof FormData] === 'string' && (formData[key as keyof FormData] as string).trim() === '') {
                newErrors[key] = `Please fill the ${key.replace('_', ' ')} field.`;
            }
            if (typeof formData[key as keyof FormData] === 'boolean' && !formData[key as keyof FormData]) {
                newErrors[key] = `Please accept the ${key.replace('_', ' ')}.`;
            }
            if (Array.isArray(formData[key as keyof FormData]) && (formData[key as keyof FormData] as any[]).length === 0) {
                newErrors[key] = `Please fill the ${key.replace('_', ' ')} field.`;
            }
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const renderInputField = (label: string, name: string, type: string = 'text', placeholder: string = '') => (
        <div className="form-control flex-1">
            <label className="label">
                <span className="label-text">{label}</span>
            </label>
            <input
                type={type}
                name={name}
                placeholder={placeholder || label}
                value={(formData as any)[name]}
                onChange={handleChange}
                className="input input-bordered"
            />
            {errors[name] && <p className="text-red-500 text-sm">{errors[name]}</p>}
        </div>
    );

    const renderTextAreaField = (label: string, name: string, placeholder: string = '') => (
        <div className="form-control flex-1">
            <label className="label">
                <span className="label-text">{label}</span>
            </label>
            <textarea
                name={name}
                placeholder={placeholder || label}
                value={(formData as any)[name]}
                onChange={handleChange}
                className="textarea textarea-bordered h-10"
            />
            {errors[name] && <p className="text-red-500 text-sm">{errors[name]}</p>}
        </div>
    );

    const renderSelectField = (label: string, name: string, options: { value: string, label: string }[]) => (
        <div className="form-control flex-1">
            <label className="label">
                <span className="label-text">{label}</span>
            </label>
            <select
                name={name}
                value={(formData as any)[name]}
                onChange={handleChange}
                className="select select-bordered"
            >
                <option value="">Select {label}</option>
                {options.map(option => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                ))}
            </select>
            {errors[name] && <p className="text-red-500 text-sm">{errors[name]}</p>}
        </div>
    );


    const addQualification = () => {
        const updatedQualifications = [...formData.qualifications, qualification];
        setFormData({ ...formData, qualifications: updatedQualifications });
        console.log("quali: ", updatedQualifications);
        setQualification('');
    };

    const handleRemoveQualification = (index: number) => {
        const updatedQualifications = formData.qualifications.filter((_, i) => i !== index);
        setFormData({ ...formData, qualifications: updatedQualifications });
    };

    const addAvailability = () => {
        const updateAvailability = [...formData.availability, dAvailability[0]];
        setFormData({ ...formData, availability: updateAvailability });
        setDAvailability([{ day: '', time_slots: '' }]);
    }

    const handleRemoveAvailability = (index: number) => {
        const updatedAvailability = formData.availability.filter((_, i) => i !== index);
        setFormData({ ...formData, availability: updatedAvailability });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (validateForm()) {
            try {
                const response = await fetch(`${baseURl}/api/users/doctor/register`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });

                if (!response.ok) {
                    throw new Error(`Error: ${response.status} ${response.statusText}`);
                }


                const data = await response.json();
                dispatch(login({ data: data, role: 'doctor' }));
                Cookies.set('token', data.token);
                Cookies.set('user', JSON.stringify(data.doctor));
                router.push('/doctor/dashboard');
            } catch (error) {
                console.error('Error:', error);
            }
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-8 w-full mx-auto">
            {/* Personal Information Section */}
            <div className="space-y-6">
                <div className="flex items-center gap-3 pb-3 border-b-2 border-emerald-500">
                    <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">Personal Information</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-control">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            name="full_name"
                            placeholder="Dr. John Doe"
                            value={formData.full_name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all outline-none"
                        />
                        {errors.full_name && <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                            {errors.full_name}
                        </p>}
                    </div>
                    
                    <div className="form-control">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="doctor@example.com"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all outline-none"
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                            {errors.email}
                        </p>}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-control">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Password <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                placeholder="Create a strong password"
                                value={formData.password}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all outline-none pr-12"
                            />
                            <button
                                type="button"
                                onClick={togglePasswordVisibility}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-emerald-600 transition-colors"
                            >
                                {showPassword ? (
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                                    </svg>
                                ) : (
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                )}
                            </button>
                        </div>
                        {errors.password && <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                            {errors.password}
                        </p>}
                    </div>

                    <div className="form-control">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Phone Number <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            name="phone_number"
                            placeholder="+1 (555) 000-0000"
                            value={formData.phone_number}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all outline-none"
                        />
                        {errors.phone_number && <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                            {errors.phone_number}
                        </p>}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-control">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Date of Birth <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="date"
                            name="date_of_birth"
                            value={formData.date_of_birth}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all outline-none"
                        />
                        {errors.date_of_birth && <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                            {errors.date_of_birth}
                        </p>}
                    </div>

                    <div className="form-control">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Gender <span className="text-red-500">*</span>
                        </label>
                        <select
                            name="gender"
                            value={formData.gender}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all outline-none bg-white"
                        >
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                        {errors.gender && <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                            {errors.gender}
                        </p>}
                    </div>
                </div>

                <div className="form-control">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Professional Bio <span className="text-red-500">*</span>
                    </label>
                    <textarea
                        name="bio"
                        placeholder="Tell us about your medical experience and expertise..."
                        value={formData.bio}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all outline-none resize-none"
                    />
                    {errors.bio && <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        {errors.bio}
                    </p>}
                </div>
            </div>
            {renderInputField('Address', 'address')}
            <div className="flex flex-wrap space-x-4">
                {renderInputField('Street', 'street')}
                {renderInputField('City', 'city')}
            </div>
            <div className="flex flex-wrap space-x-4">
                {renderInputField('State', 'state')}
                {renderInputField('Postal Code', 'postal_code')}
            </div>
            {renderInputField('Country', 'country')}
            {renderInputField('Specialization', 'specialization')}
            {renderInputField('Years of Experience', 'experience_years')}
            {renderInputField('License Number', 'license_number')}
            {renderInputField('Consultation Fee', 'consultation_fee')}

            {/* Qualifications */}
            <div className="form-control flex-1">
                <label className="label">
                    <span className="label-text">Qualifications</span>
                </label>
                <div className="flex justify-between mb-3">
                    <input
                        type="text"
                        name="qualifications"
                        placeholder="Qualifications"
                        value={qualification}
                        onChange={(e) => setQualification(e.target.value)}
                        className="input input-bordered"
                    />
                    <button type="button" onClick={addQualification} className="btn btn-sm btn-primary mt-2">Add Qualification</button>
                </div>
                <div className="flex">
                    <ul className="flex gap-4 flex-wrap">
                        {formData.qualifications.map((qualification, index) => (
                            <li key={index} className=' list-none border-2 px-2 border-purple-600'>
                                <span className=' mr-3'>{qualification}</span>
                                <span className='bg-red-800 px-2 text-white cursor-pointer' onClick={() => handleRemoveQualification(index)}>X</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Availability */}
            <div className="form-control flex-1">
                <label className="label">
                    <span className="label-text">Availability</span>
                </label>
                <div className="flex justify-between mb-3">
                    <input
                        type="text"
                        name="availability.day"
                        placeholder="Day"
                        value={dAvailability[0].day}
                        onChange={(e) => setDAvailability([{ ...dAvailability[0], day: e.target.value }])}
                        className="input input-bordered"
                    />
                    <input
                        type="text"
                        name="availability.time_slots"
                        placeholder="time_slots"
                        value={dAvailability[0].time_slots}
                        onChange={(e) => setDAvailability([{ ...dAvailability[0], time_slots: e.target.value }])}
                        className="input input-bordered"
                    />
                    <button type="button" onClick={addAvailability} className="btn btn-sm btn-primary mt-2">Add Availability</button>
                </div>
                <div className="flex">
                    <ul className="flex gap-4 flex-wrap">
                        {formData.availability.map((slot, index) => (
                            <li key={index} className='list-none border-2 px-2 border-purple-600'>
                                <span className='mr-3'>{slot.day} - {slot.time_slots}</span>
                                <span className='bg-red-800 px-2 text-white cursor-pointer' onClick={() => handleRemoveAvailability(index)}>X</span>
                            </li>
                        ))}
                    </ul>
                </div>
                {errors.availability && <p className="text-red-500 text-sm">{errors.availability}</p>}
            </div>

            {/* Languages Spoken */}
            <div className="form-control flex-1">
                <label className="label">
                    <span className="label-text">Languages Spoken</span>
                </label>
                <div className="flex justify-between mb-3">
                    <input
                        type="text"
                        name="languages_spoken"
                        placeholder="Languages Spoken"
                        value={languagesSpoken[0]}
                        onChange={(e) => setLanguagesSpoken([e.target.value])}
                        className="input input-bordered"
                    />
                    <button type="button" onClick={() => {
                        setFormData({ ...formData, languages_spoken: [...formData.languages_spoken, languagesSpoken[0]] });
                        setLanguagesSpoken(['']);
                    }} className="btn btn-sm btn-primary mt-2">Add Language</button>
                </div>
                <div className="flex">
                    <ul className="flex gap-4 flex-wrap">
                        {formData.languages_spoken.map((language, index) => (
                            <li key={index} className='list-none border-2 px-2 border-purple-600'>
                                <span className='mr-3'>{language}</span>
                                <span className='bg-red-800 px-2 text-white cursor-pointer' onClick={() => {
                                    const updatedLanguages = formData.languages_spoken.filter((_, i) => i !== index);
                                    setFormData({ ...formData, languages_spoken: updatedLanguages });
                                }}>X</span>
                            </li>
                        ))}
                    </ul>
                </div>
                {errors.languages_spoken && <p className="text-red-500 text-sm">{errors.languages_spoken}</p>}
            </div>

            {/* Hospital Affiliations */}
            <div className="form-control flex-1">
                <label className="label">
                    <span className="label-text">Hospital Affiliations</span>
                </label>
                <div className="grid gap-4 grid-cols-2">
                    <input
                        type="text"
                        name="hospital_affiliations.name"
                        placeholder="Hospital Name"
                        value={hospitalAffiliations[0].name}
                        onChange={(e) => setHospitalAffiliations([{ ...hospitalAffiliations[0], name: e.target.value }])}
                        className="input input-bordered"
                    />
                    <input
                        type="text"
                        name="hospital_affiliations.address.street"
                        placeholder="Street"
                        value={hospitalAffiliations[0].address.street}
                        onChange={(e) => setHospitalAffiliations([{ ...hospitalAffiliations[0], address: { ...hospitalAffiliations[0].address, street: e.target.value } }])}
                        className="input input-bordered"
                    />
                    <input
                        type="text"
                        name="hospital_affiliations.address.city"
                        placeholder="City"
                        value={hospitalAffiliations[0].address.city}
                        onChange={(e) => setHospitalAffiliations([{ ...hospitalAffiliations[0], address: { ...hospitalAffiliations[0].address, city: e.target.value } }])}
                        className="input input-bordered"
                    />
                    <input
                        type="text"
                        name="hospital_affiliations.address.state"
                        placeholder="State"
                        value={hospitalAffiliations[0].address.state}
                        onChange={(e) => setHospitalAffiliations([{ ...hospitalAffiliations[0], address: { ...hospitalAffiliations[0].address, state: e.target.value } }])}
                        className="input input-bordered"
                    />
                    <input
                        type="text"
                        name="hospital_affiliations.address.postal_code"
                        placeholder="Postal Code"
                        value={hospitalAffiliations[0].address.postal_code}
                        onChange={(e) => setHospitalAffiliations([{ ...hospitalAffiliations[0], address: { ...hospitalAffiliations[0].address, postal_code: e.target.value } }])}
                        className="input input-bordered"
                    />
                    <input
                        type="text"
                        name="hospital_affiliations.address.country"
                        placeholder="Country"
                        value={hospitalAffiliations[0].address.country}
                        onChange={(e) => setHospitalAffiliations([{ ...hospitalAffiliations[0], address: { ...hospitalAffiliations[0].address, country: e.target.value } }])}
                        className="input input-bordered"
                    />
                </div>
                <button type="button" onClick={() => {
                    setFormData({ ...formData, hospital_affiliations: [...formData.hospital_affiliations, hospitalAffiliations[0]] });
                    setHospitalAffiliations([{ name: '', address: { street: '', city: '', state: '', postal_code: '', country: '' } }]);
                }} className="btn btn-sm btn-primary mt-2">Add Hospital</button>
                <div className="flex mt-3">
                    <ul className="flex gap-4 flex-wrap">
                        {formData.hospital_affiliations.map((hospital, index) => (
                            <li key={index} className='list-none border-2 px-2 border-purple-600'>
                                <span className='mr-3'>{hospital.name}, {hospital.address.street}, {hospital.address.city}, {hospital.address.state}, {hospital.address.postal_code}, {hospital.address.country}</span>
                                <span className='bg-red-800 px-2 text-white cursor-pointer' onClick={() => {
                                    const updatedHospitals = formData.hospital_affiliations.filter((_, i) => i !== index);
                                    setFormData({ ...formData, hospital_affiliations: updatedHospitals });
                                }}>X</span>
                            </li>
                        ))}
                    </ul>
                </div>
                {errors.hospital_affiliations && <p className="text-red-500 text-sm">{errors.hospital_affiliations}</p>}
            </div>

            {/* Awards and Recognitions */}
            <div className="form-control flex-1">
                <label className="label">
                    <span className="label-text">Awards and Recognitions</span>
                </label>
                <div className="flex justify-between mb-3">
                    <input
                        type="text"
                        name="awards_and_recognitions"
                        placeholder="Awards and Recognitions"
                        value={awardsAndRecognitions[0]}
                        onChange={(e) => setAwardsAndRecognitions([e.target.value])}
                        className="input input-bordered"
                    />
                    <button type="button" onClick={() => {
                        setFormData({ ...formData, awards_and_recognitions: [...formData.awards_and_recognitions, awardsAndRecognitions[0]] });
                        setAwardsAndRecognitions(['']);
                    }} className="btn btn-sm btn-primary mt-2">Add Award</button>
                </div>
                <div className="flex">
                    <ul className="flex gap-4 flex-wrap">
                        {formData.awards_and_recognitions.map((award, index) => (
                            <li key={index} className='list-none border-2 px-2 border-purple-600'>
                                <span className='mr-3'>{award}</span>
                                <span className='bg-red-800 px-2 text-white cursor-pointer' onClick={() => {
                                    const updatedAwards = formData.awards_and_recognitions.filter((_, i) => i !== index);
                                    setFormData({ ...formData, awards_and_recognitions: updatedAwards });
                                }}>X</span>
                            </li>
                        ))}
                    </ul>
                </div>
                {errors.awards_and_recognitions && <p className="text-red-500 text-sm">{errors.awards_and_recognitions}</p>}
            </div>


            <div className="flex flex-wrap space-x-4">
                {renderInputField('Twitter', 'social_links.twitter')}
                {renderInputField('LinkedIn', 'social_links.linkedin')}
            </div>
            <div className="flex flex-wrap space-x-4">
                <div className="form-control flex-1">
                    <label className="cursor-pointer label">
                        <span className="label-text">Consent Form Signed</span>
                        <input type="checkbox" name="consent_form_signed" checked={formData.consent_form_signed} onChange={handleChange} className="checkbox checkbox-primary" />
                    </label>
                    {errors.consent_form_signed && <p className="text-red-500 text-sm">{errors.consent_form_signed}</p>}
                </div>
                <div className="form-control flex-1">
                    <label className="cursor-pointer label">
                        <span className="label-text">Terms Accepted</span>
                        <input type="checkbox" name="terms_accepted" checked={formData.terms_accepted} onChange={handleChange} className="checkbox checkbox-primary" />
                    </label>
                    {errors.terms_accepted && <p className="text-red-500 text-sm">{errors.terms_accepted}</p>}
                </div>
            </div>
            <button type="submit" className="btn btn-success">Submit</button>
        </form>
    );
};

export default DoctorRegistrationForm;
