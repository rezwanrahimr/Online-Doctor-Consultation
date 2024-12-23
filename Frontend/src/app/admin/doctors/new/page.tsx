"use client";

import AdminLayout from "@/components/AdminLayout";
import DoctorForm from "@/components/DoctorForm";

const NewDoctorPage = () => {
    return (
        <AdminLayout>
            <div>
                <h1 className='text-center text-3xl my-5 font-work-sans font-bold'>Create New Doctor</h1>
                <DoctorForm />
            </div>
        </AdminLayout>
    );
};

export default NewDoctorPage;