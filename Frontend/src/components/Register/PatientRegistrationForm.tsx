"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import Cookies from "js-cookie";

const baseURl = process.env.NEXT_PUBLIC_API_URL;

const PatientRegistrationForm = () => {
  interface FormData {
    full_name: string;
    email: string;
    password: string;
    phone_number: string;
    date_of_birth: string;
    gender: string;
    blood_group: string;
    height: {
      feet: string;
      inches: string;
    };
    weight: {
      value: string;
      unit: string;
    };
    emergency_contact: {
      name: string;
      phone_number: string;
      relationship: string;
    };
    terms_accepted: boolean;
    consent_form_signed: boolean;
    address: {
      street: string;
      city: string;
      state: string;
      postal_code: string;
      country: string;
    };
  }

  const [formData, setFormData] = useState<FormData>({
    full_name: "",
    email: "",
    password: "",
    phone_number: "",
    date_of_birth: "",
    gender: "",
    blood_group: "",
    height: { feet: "", inches: "" },
    weight: { value: "", unit: "" },
    emergency_contact: { name: "", phone_number: "", relationship: "" },
    terms_accepted: false,
    consent_form_signed: false,
    address: {
      street: "",
      city: "",
      state: "",
      postal_code: "",
      country: "",
    },
  });

  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else if (
      name.includes("height") ||
      name.includes("weight") ||
      name.includes("emergency_contact") ||
      name.includes("address")
    ) {
      const [category, field] = name.split(".");
      setFormData({
        ...formData,
        [category]: {
          ...(formData[category as keyof FormData] as any),
          [field]: value,
        },
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const validate = (): boolean => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.full_name) newErrors.full_name = "Full Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";
    if (!formData.phone_number)
      newErrors.phone_number = "Phone Number is required";
    if (!formData.date_of_birth)
      newErrors.date_of_birth = "Date of Birth is required";
    if (!formData.gender) newErrors.gender = "Gender is required";
    if (!formData.blood_group)
      newErrors.blood_group = "Blood Group is required";
    if (!formData.height.feet)
      newErrors["height.feet"] = "Height (Feet) is required";
    if (!formData.height.inches)
      newErrors["height.inches"] = "Height (Inches) is required";
    if (!formData.weight.value)
      newErrors["weight.value"] = "Weight is required";
    if (!formData.weight.unit)
      newErrors["weight.unit"] = "Weight Unit is required";
    if (!formData.emergency_contact.name)
      newErrors["emergency_contact.name"] =
        "Emergency Contact Name is required";
    if (!formData.emergency_contact.phone_number)
      newErrors["emergency_contact.phone_number"] =
        "Emergency Contact Phone Number is required";
    if (!formData.emergency_contact.relationship)
      newErrors["emergency_contact.relationship"] =
        "Emergency Contact Relationship is required";
    if (!formData.terms_accepted)
      newErrors.terms_accepted = "You must accept the terms";
    if (!formData.consent_form_signed)
      newErrors.consent_form_signed = "You must sign the consent form";
    if (!formData.address.street)
      newErrors["address.street"] = "Street is required";
    if (!formData.address.city) newErrors["address.city"] = "City is required";
    if (!formData.address.state)
      newErrors["address.state"] = "State is required";
    if (!formData.address.postal_code)
      newErrors["address.postal_code"] = "Postal Code is required";
    if (!formData.address.country)
      newErrors["address.country"] = "Country is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();
    if (!validate()) return;

    try {
      const response = await fetch(
        `${baseURl}/api/users/patient/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      Cookies.set("token", data.token);
      Cookies.set("user", JSON.stringify(data.patient));
      window.location.href = "/patient/dashboard";
      console.log("Form submitted successfully:", data);

      // Reset form after successful submission
      setFormData({
        full_name: "",
        email: "",
        password: "",
        phone_number: "",
        date_of_birth: "",
        gender: "",
        blood_group: "",
        height: { feet: "", inches: "" },
        weight: { value: "", unit: "" },
        emergency_contact: { name: "", phone_number: "", relationship: "" },
        terms_accepted: false,
        consent_form_signed: false,
        address: {
          street: "",
          city: "",
          state: "",
          postal_code: "",
          country: "",
        },
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="w-full mx-auto">
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Personal Information Section */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b-2 border-teal-500">
            <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center">
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
                placeholder="Enter your full name"
                value={formData.full_name}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all outline-none"
              />
              {errors.full_name && (
                <span className="text-red-500 text-sm mt-1 flex items-center gap-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  {errors.full_name}
                </span>
              )}
            </div>
            
            <div className="form-control">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all outline-none"
              />
              {errors.email && (
                <span className="text-red-500 text-sm mt-1 flex items-center gap-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  {errors.email}
                </span>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="form-control md:col-span-1">
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
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all outline-none pr-12"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-teal-600 transition-colors"
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
              {errors.password && (
                <span className="text-red-500 text-sm mt-1 flex items-center gap-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  {errors.password}
                </span>
              )}
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
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all outline-none"
              />
              {errors.phone_number && (
                <span className="text-red-500 text-sm mt-1 flex items-center gap-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  {errors.phone_number}
                </span>
              )}
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
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all outline-none"
              />
              {errors.date_of_birth && (
                <span className="text-red-500 text-sm mt-1 flex items-center gap-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  {errors.date_of_birth}
                </span>
              )}
            </div>

            <div className="form-control">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Gender <span className="text-red-500">*</span>
              </label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all outline-none bg-white"
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              {errors.gender && (
                <span className="text-red-500 text-sm mt-1 flex items-center gap-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  {errors.gender}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Medical Information Section */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b-2 border-emerald-500">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800">Medical Information</h3>
          </div>

          <div className="form-control">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Blood Group <span className="text-red-500">*</span>
            </label>
            <select
              name="blood_group"
              value={formData.blood_group}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all outline-none bg-white"
            >
              <option value="">Select Blood Group</option>
              <option value="A+">A+ (A Positive)</option>
              <option value="A-">A- (A Negative)</option>
              <option value="B+">B+ (B Positive)</option>
              <option value="B-">B- (B Negative)</option>
              <option value="AB+">AB+ (AB Positive)</option>
              <option value="AB-">AB- (AB Negative)</option>
              <option value="O+">O+ (O Positive)</option>
              <option value="O-">O- (O Negative)</option>
            </select>
            {errors.blood_group && (
              <span className="text-red-500 text-sm mt-1 flex items-center gap-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                {errors.blood_group}
              </span>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Height <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <input
                    type="text"
                    name="height.feet"
                    placeholder="Feet"
                    value={formData.height.feet}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all outline-none"
                  />
                  {errors["height.feet"] && (
                    <span className="text-red-500 text-xs mt-1">{errors["height.feet"]}</span>
                  )}
                </div>
                <div>
                  <input
                    type="text"
                    name="height.inches"
                    placeholder="Inches"
                    value={formData.height.inches}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all outline-none"
                  />
                  {errors["height.inches"] && (
                    <span className="text-red-500 text-xs mt-1">{errors["height.inches"]}</span>
                  )}
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Weight <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <input
                    type="text"
                    name="weight.value"
                    placeholder="Value"
                    value={formData.weight.value}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all outline-none"
                  />
                  {errors["weight.value"] && (
                    <span className="text-red-500 text-xs mt-1">{errors["weight.value"]}</span>
                  )}
                </div>
                <div>
                  <select
                    name="weight.unit"
                    value={formData.weight.unit}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all outline-none bg-white"
                  >
                    <option value="">Unit</option>
                    <option value="kg">kg</option>
                    <option value="lbs">lbs</option>
                  </select>
                  {errors["weight.unit"] && (
                    <span className="text-red-500 text-xs mt-1">{errors["weight.unit"]}</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Address Section */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b-2 border-cyan-500">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800">Address Information</h3>
          </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Street Address <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="address.street"
                placeholder="123 Main Street, Apt 4B"
                value={formData.address.street}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all outline-none"
              />
              {errors["address.street"] && (
                <span className="text-red-500 text-sm mt-1 flex items-center gap-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  {errors["address.street"]}
                </span>
              )}
            </div>

            <div className="form-control">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                City <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="address.city"
                placeholder="New York"
                value={formData.address.city}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all outline-none"
              />
              {errors["address.city"] && (
                <span className="text-red-500 text-sm mt-1 flex items-center gap-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  {errors["address.city"]}
                </span>
              )}
            </div>

            <div className="form-control">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                State/Province <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="address.state"
                placeholder="NY"
                value={formData.address.state}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all outline-none"
              />
              {errors["address.state"] && (
                <span className="text-red-500 text-sm mt-1 flex items-center gap-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  {errors["address.state"]}
                </span>
              )}
            </div>

            <div className="form-control">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Postal Code <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="address.postal_code"
                placeholder="10001"
                value={formData.address.postal_code}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all outline-none"
              />
              {errors["address.postal_code"] && (
                <span className="text-red-500 text-sm mt-1 flex items-center gap-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  {errors["address.postal_code"]}
                </span>
              )}
            </div>

            <div className="form-control">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Country <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="address.country"
                placeholder="United States"
                value={formData.address.country}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all outline-none"
              />
              {errors["address.country"] && (
                <span className="text-red-500 text-sm mt-1 flex items-center gap-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  {errors["address.country"]}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Emergency Contact Section */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b-2 border-red-500">
            <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800">Emergency Contact</h3>
          </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="form-control">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Contact Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="emergency_contact.name"
                placeholder="John Doe"
                value={formData.emergency_contact.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all outline-none"
              />
              {errors["emergency_contact.name"] && (
                <span className="text-red-500 text-sm mt-1 flex items-center gap-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  {errors["emergency_contact.name"]}
                </span>
              )}
            </div>

            <div className="form-control">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Contact Phone <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="emergency_contact.phone_number"
                placeholder="+1 (555) 000-0000"
                value={formData.emergency_contact.phone_number}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all outline-none"
              />
              {errors["emergency_contact.phone_number"] && (
                <span className="text-red-500 text-sm mt-1 flex items-center gap-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  {errors["emergency_contact.phone_number"]}
                </span>
              )}
            </div>

            <div className="form-control md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Relationship <span className="text-red-500">*</span>
              </label>
              <select
                name="emergency_contact.relationship"
                value={formData.emergency_contact.relationship}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all outline-none bg-white"
              >
                <option value="">Select Relationship</option>
                <option value="spouse">Spouse</option>
                <option value="parent">Parent</option>
                <option value="sibling">Sibling</option>
                <option value="child">Child</option>
                <option value="friend">Friend</option>
                <option value="other">Other</option>
              </select>
              {errors["emergency_contact.relationship"] && (
                <span className="text-red-500 text-sm mt-1 flex items-center gap-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  {errors["emergency_contact.relationship"]}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Terms and Consent Section */}
        <div className="space-y-4 p-6 bg-gray-50 rounded-2xl border-2 border-gray-200">
          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              name="terms_accepted"
              checked={formData.terms_accepted}
              onChange={handleChange}
              className="w-5 h-5 mt-1 text-teal-600 border-2 border-gray-300 rounded focus:ring-2 focus:ring-teal-200 transition-all"
            />
            <div className="flex-1">
              <label className="text-sm text-gray-700">
                I accept the <a href="/terms" className="text-teal-600 hover:text-teal-700 font-semibold underline">Terms and Conditions</a>
              </label>
              {errors.terms_accepted && (
                <span className="text-red-500 text-xs mt-1 block">{errors.terms_accepted}</span>
              )}
            </div>
          </div>

          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              name="consent_form_signed"
              checked={formData.consent_form_signed}
              onChange={handleChange}
              className="w-5 h-5 mt-1 text-teal-600 border-2 border-gray-300 rounded focus:ring-2 focus:ring-teal-200 transition-all"
            />
            <div className="flex-1">
              <label className="text-sm text-gray-700">
                I consent to the collection and processing of my medical information as described in the <a href="/privacy" className="text-teal-600 hover:text-teal-700 font-semibold underline">Privacy Policy</a>
              </label>
              {errors.consent_form_signed && (
                <span className="text-red-500 text-xs mt-1 block">{errors.consent_form_signed}</span>
              )}
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button 
            type="submit" 
            className="w-full bg-gradient-to-r from-teal-600 via-emerald-600 to-cyan-600 hover:from-teal-700 hover:via-emerald-700 hover:to-cyan-700 text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-2 text-lg"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Complete Registration
          </button>
        </div>
      </form>
    </div>
  );
};

export default PatientRegistrationForm;
