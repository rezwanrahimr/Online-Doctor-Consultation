'use client'

import { ServiceCardCarousel } from "./ServiceCardCarousel";

const Service = () => {

    return (
        <div className="bg-[url('../images/service_bg.jpg')]" >
            <div className="px-4 lg:px-64 py-10" style={{ backgroundColor: "#ffffff9c" }}>
                <div className="text-center">
                    <p className="py-4 text-xl font-dm-sans font-bold text-color-primary leading-tight">
                        | Our Service
                    </p>
                    <h1 className="text-4xl lg:text-5xl font-semibold font-work-sans text-color-black leading-tight">
                        Our Madical Service
                    </h1>
                </div>

                <div className="my-12">
                    <ServiceCardCarousel />
                </div>
            </div>
        </div >


    )
}

export default Service;