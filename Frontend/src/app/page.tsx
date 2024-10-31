import AboutUs from "@/components/AboutUs";
import Appointment from "@/components/Appointment";
import Doctors from "@/components/Doctors";
import EmergencyContact from "@/components/EmergencyContact";
import FAQ from "@/components/FAQ";
import Hero from "@/components/Hero";
import Service from "@/components/Service";
import Testimonial from "@/components/Testimonials";
import WorkingProcess from "@/components/WorkingProcess";

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutUs />
      <Service />
      <FAQ />
      <WorkingProcess />
      <Appointment />
      <EmergencyContact />
      <Doctors />
      <Testimonial />
    </div>
  );
}
